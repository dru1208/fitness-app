import React, { Component } from "react";
import EventEntry from "./event-entry.jsx";


const EventList = (props) => {
  return (
  <div className="dashboardEventList">
    <h1>Events</h1>
      <EventEntry />
  </div>
  )
}

export default EventList


