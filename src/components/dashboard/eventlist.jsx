import React, { Component } from "react";
import Event from "./event.jsx";

const EventList = (props) => {
  const generateEventList = props.events.map((e) => {
      return <Event event={e} name={e.name} description={e.description} location={e.location} datetime={e.datetime} />
    })

  return (
  <main className="events">
    <h1>Events</h1>
      {generateEventList}
  </main>
  )
}

export default EventList