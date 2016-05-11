//lists articles
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Report from './report';
import SearchBar from './search_bar';

const ReportsList = (props) => {
  // const dates = props.reports.created;
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

//map by date created in report items