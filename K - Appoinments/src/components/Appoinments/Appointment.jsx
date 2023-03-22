import React, { Component } from "react";
import Items from "../Items/items";
class Appointment extends Component {
  state = {};
  render() {
    return (
      <div className="col-12 container-fluid m-3 row p-2">
        <h3 className="text-center p-2">Appointments</h3>

        <div className="container column card col-5 m-3 p-3 w-50 shadow">
          <input
            type="text"
            className="m-2 p-2 "
            placeholder="Appointment Name"
          />
          <input type="text" className="m-2 p-2 " placeholder="Person name" />
          <div className="">
            <input type="date" className="m-2 p-2" />
            <input type="time" className="m-2 p-2" />
          </div>
          <textarea
            placeholder="message..."
            maxLength="50"
            className="m-2 p-2"
          />
          <button className="btn btn-primary w-50 m-2">Submit</button>
        </div>

        <div className="container col-5 m-3 p-2 card">
          <Items />
        </div>
      </div>
    );
  }
}

export default Appointment;
