import React from "react";

const Items = (props) => {
  const {appointments} = props;
  
  const {appointmentName, date, time, personName, message} = appointments
  return (
    <React.Fragment>
      
        <div className="card p-2 shadow m-2">
          <div className="d-flex justify-content-between">
            <h6>{appointmentName}</h6>
            <div>
              <i className="bi bi-star text-black m-1 cursor"></i>
              <i className="bi bi-trash3"></i>
            </div>
          </div>
          <div>
            <p>{personName}</p>
            <p>
              {date} <span>{time}</span>
            </p>
            <p className="text-muted">{message}</p>
          </div>
        </div>
      
    </React.Fragment>
  );
};

export default Items;
