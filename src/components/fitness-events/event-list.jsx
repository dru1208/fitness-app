import React, { Component } from "react";
import EventEntry from "./event-entry.jsx"

import { generateEventURL } from '../../_helper.jsx'

const EventList = (props) => {

  const generateEventList = props.eventsList.map ((event, index) => {
    return <EventEntry event={event} key={index} handleDestroy={props.handleDestroy}/>
  })

  return (
    <main className="events">
      <h1>Events</h1>
      {generateEventList}
    </main>
  )
}


export default EventList;