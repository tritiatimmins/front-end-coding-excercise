import React from 'react';

const ReportDetail = ({reports}) => {
  console.log(reports)

  if(!reports) {
    return <h1 className="no-report-selected"> 
      No report selected
    </h1> 
  }
  
  return (
    <div>
      <h1 className="reportTitle">{reports.title}</h1>
      <h3 className="reportBody">{reports.body}</h3>
    </div>
  )


};

export default ReportDetail;