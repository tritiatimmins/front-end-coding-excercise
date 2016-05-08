//lists articles
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Report from './report';

const ReportsList = (props) => {
  const reportItems = props.reports.map((report) => {
    return (
      <Report 
        onReportSelect={props.onReportSelect}
        report={report} 
        key={report.id}
      />
    );
  });

  return (
    <ul>
      {reportItems}
    </ul>
  );
}

export default ReportsList;
