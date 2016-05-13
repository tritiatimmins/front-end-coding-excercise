import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar';

const Report = ({report, onReportSelect}) => {
  
  console.log(report);

  return (
    <li 
      onClick={() => onReportSelect(report)} 
      className="report-items">
       {report.title}
    </li>
  );

};

export default Report;