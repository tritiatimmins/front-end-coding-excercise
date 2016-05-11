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
          type="text"
          value={this.state.searchTerm}
          onChange={event => this.setState({ searchTerm: event.target.value })}
          placeholder="Filter..."
          />
      </div>
     ) 
  }

//set state with a term
//call callback with a term
//onChange -> should show new lis

}

export default SearchBar;