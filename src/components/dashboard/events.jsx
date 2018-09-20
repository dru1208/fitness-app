import React, { Component } from "react";

export default class Events extends Component {

  render() {
    const events = JSON.parse(this.props.events);
    return (
      <main class="events">
        <h1>Events</h1>
        <a href="https://www.w3schools.com">{events.name}</a>
        <div class="event-description">{events.description}</div>
        <div class="event-datetime-location">{events.location} • {events.datetime}</div>
      </main>
    )
  }
}
