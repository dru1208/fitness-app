import React, { Component } from "react";
import EventEntry from "./event-entry.jsx"

const EventList = (props) => {

  return (
  <main className="events">
    <h1>Events</h1>
      <EventEntry userID={props.userID} history={props.history}/>
  </main>
  )
}

export default EventList;