import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';


//components
import SearchBar from './public/components/search_bar';
import ReportsList from './public/components/reports_list';
import ReportDetail from './public/components/report_detail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      selectedReport: null
    };
  
  }

  componentWillMount() {
    axios.get('/reports')
    .then( function(resp){
      this.setState({
        reports: resp.data
      });
    }.bind(this))
    .catch(function(resp){
      console.log('axios error', resp);
    }.bind(this));
  }

  render () {
    return ( 
      <div className="container">
        <div className="row main-container">
         {/*search bar has it's own div container*/}
          <SearchBar/>
          <div className="col-md-4 report-container">
            <ReportsList 
            onReportSelect={selectedReport => this.setState({selectedReport})} 
            reports={this.state.reports}/>
          </div>
          <div className="col-md-8 report-detail">
            <ReportDetail reports={this.state.selectedReport}/>
          </div>
        </div>
      </div>
    );
  }

}

render(<App/>, document.getElementById('app'))