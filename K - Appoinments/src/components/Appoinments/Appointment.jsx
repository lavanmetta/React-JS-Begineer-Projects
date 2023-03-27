import React, { Component } from "react";
import Items from "../Items/items";
import { AppointmentsList } from "./data";

class Appointment extends Component {
  state = {
    id: "",
    appointmentName: "",
    personName: "",
    date: "",
    time: "",
    message: "",
    appointmentsLists: [],
    like: false,
  };

  componentDidMount() {
    const appointments = AppointmentsList();
    this.setState({ appointmentsLists: appointments });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { appointmentName, personName, date, time, message } = this.state;
    let newAppointment = {
      id: this.state.appointmentsLists.length + 1,
      appointmentName,
      personName,
      date,
      time,
      message,
    };
    this.setState({
      appointmentsLists: [...this.state.appointmentsLists, newAppointment],
    });
  };

  handleFavorite = (id) => {
    const favoritesLikes = this.state.appointmentsLists.filter(
      (each) => each.id === id
    );
    const result =
      favoritesLikes &&
      this.setState((prevState) => {
        return {
          like: !prevState.like,
        };
      });
      return result
  };


  handleDelete = (id) => {
   
    const deleted = this.state.appointmentsLists.filter(
      (each) => each.id !== id
    );
    this.setState({appointmentsLists: deleted})
  }

  render() {
    const { appointmentsLists } = this.state;

    return (
      <div className="col-12 container-fluid m-3 row p-2">
        <h3 className="text-center p-2">Appointments</h3>

        <div className="container column card col-5 m-3 p-3 w-50 shadow">
          <input
            type="text"
            className="m-2 p-2 "
            placeholder="Appointment Name"
            onChange={this.handleChange}
            name="appointmentName"
          />
          <input
            type="text"
            className="m-2 p-2 "
            placeholder="Person name"
            onChange={this.handleChange}
            name="personName"
          />
          <div>
            <input
              type="date"
              className="m-2 p-2"
              onChange={this.handleChange}
              name="date"
            />
            <input
              type="time"
              className="m-2 p-2"
              onChange={this.handleChange}
              name="time"
            />
          </div>
          <textarea
            placeholder="message..."
            maxLength="50"
            className="m-2 p-2"
            onChange={this.handleChange}
            name="message"
          />
          <button
            className="btn btn-primary w-50 m-2"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>

        <div className="container col-5 m-3 p-2 card hh">
          {appointmentsLists.map((each) => (
            <Items
              key={each.id}
              appointments={each}
              liked={this.state.like}
              handleFavorite={this.handleFavorite}
              handleDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Appointment;
