import React from 'react';

const ReportDetail = ({reports}) => {
  console.log(reports)

  if(!reports) {
    return <div> 
      No Report Selected;
    </div> 
  }
  
  return (
    <div>
      <h1 className="reportTitle">{reports.title}</h1>
      <h3 className="reportBody">{reports.body}</h3>
    </div>
  )


};

export default ReportDetail;