import React from "react";
import EventEntry from "./event-entry.jsx";


const EventList = (props) => {
  return (
  <div className="dashboardEventList border">
    <h3>Events</h3>
      <EventEntry />
  </div>
  )
}

export default EventList


