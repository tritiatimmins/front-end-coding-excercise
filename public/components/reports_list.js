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
        key={report.created}
      />
    );
  });

  return (
    <div className="col-md-4 report-container">
      <ul>
        {reportItems}
      </ul>
    </div>
  );

}

export default ReportsList;
