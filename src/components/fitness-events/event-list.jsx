import React, { Component } from "react";
import EventEntry from "./event-entry.jsx"

const EventList = (props) => {

  return (
  <main className="events">
    <h1>Events</h1>
      <EventEntry />
  </main>
  )
}

export default EventList;