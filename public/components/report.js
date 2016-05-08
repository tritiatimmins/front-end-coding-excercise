import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Report = ({report, onReportSelect}) => {
  
  console.log(report);

  return (
    <li onClick={() => onReportSelect(report)} className="report-items">
      <div>{report.title}</div>
    </li>
  );

};

export default Report;