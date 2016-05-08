import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    //initialize
    //properties we want to record on the state
    this.state = { searchTerm: '' };
  }

  //update state
  render () {
    return ( 
      <div className="search-bar">
        <input 
          value={this.state.searchTerm}
          onChange={event => this.setState({ searchTerm: event.target.value })} />
      </div>
     ) 
  }


}

export default SearchBar;