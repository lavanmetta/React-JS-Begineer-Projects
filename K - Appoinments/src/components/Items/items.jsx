import React from "react";
import { useState } from "react";
const Items = (props) => {
  const { appointments, handleFavorite, liked, handleDelete,  } = props;

  const { appointmentName, date, time, personName, message } = appointments;
  const [like, setLiked] = useState();

  const likeHandler = () => {
    handleFavorite(appointments.id)
    setLiked(liked)
   
  };



 

  return (
    <React.Fragment>
      <div className="card p-2 shadow m-2">
        <div className="d-flex justify-content-between">
          <h6>{appointmentName}</h6>
          <div>
            {like ? (
              <i
                className="bi bi-star-fill text-warning m-1 cursor"
                onClick={likeHandler}
              ></i>
            ) : (
              <i
                className="bi bi-star text-black m-1 cursor"
                onClick={likeHandler}
              ></i>
            )}
            <i className="bi bi-trash3" onClick={() => handleDelete(appointments.id)}></i>
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
