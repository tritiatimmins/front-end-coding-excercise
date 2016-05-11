import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Report from './report';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    //initialize
    //properties we want to record on the state
    this.state = { searchTerm: '' };
  }

  //Update search 
  updateSearch(event) {
    this.setState({searchTerm: event.target.value.substr(0, 20)});
  }

  //update state
  render () {
    // console.log(this.props.reports); yay I see an array
    let filteredReports = this.props.reports.filter((report) => {
      return report.title.toLowerCase().indexOf(
          this.state.searchTerm.toLowerCase()) !== -1;
      }
    );

    return ( 
      <div className="search-bar">
        <input 
          type="text"
          value={this.state.searchTerm}
          // onChange={event => this.setState({ searchTerm: event.target.value })}
          onChange={this.updateSearch.bind(this)}
          placeholder="Filter..."
          />

        <ul>{filteredReports.map((report)=> {
          return <Report report={report} key={report.id}/>
        })}
        </ul>

      </div>
     ) 
  }
  
}

export default SearchBar;