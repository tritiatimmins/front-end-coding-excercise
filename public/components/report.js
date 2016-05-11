import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Report = ({report, onReportSelect}) => {
  
  console.log(report);

  return (
    <li 
      onClick={() => onReportSelect(report)} 
      className="report-items">
        <div className="title-preview">{report.title}</div>
    </li>
  );

};

export default Report;