import React, { Component } from "react";

export default class Events extends Component {

  render() {
    const events = JSON.parse(this.props.events);
    return (
      <main className="events">
        <h1>Events</h1>
          <div className="single-event">
          <a href="https://www.w3schools.com">{events.name}</a>
          <div className="event-description">{events.description}</div>
          <div className="event-datetime-location">{events.location} • {events.datetime}</div>
        </div>
        <div className="single-event">
          <a href="https://www.w3schools.com">{events.name}</a>
          <div className="event-description">{events.description}</div>
          <div className="event-datetime-location">{events.location} • {events.datetime}</div>
        </div>
        <div className="single-event">
          <a href="https://www.w3schools.com">{events.name}</a>
          <div className="event-description">{events.description}</div>
          <div className="event-datetime-location">{events.location} • {events.datetime}</div>
        </div>
      </main>
    )
  }
}
