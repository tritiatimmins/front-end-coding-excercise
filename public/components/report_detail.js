import React from 'react';

const ReportDetail = ({reports}) => {

  if(!reports) {
    return <h1 className="no-report-selected">
      No report selected
    </h1> 
  }
  
  return (
    <div className="col-md-8 report-detail">
      <h1>{reports.title}</h1>
      <p>{reports.body}</p>
    </div>
  )


};

export default ReportDetail;