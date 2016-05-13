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
          <SearchBar reports={this.state.reports}/>
            <ReportsList 
              onReportSelect={selectedReport =>this.setState({selectedReport})} 
              reports={this.state.reports}
            />
            <ReportDetail reports={this.state.selectedReport}/>
        </div>
      </div>
    );
  }

}

render(<App/>, document.getElementById('app'))