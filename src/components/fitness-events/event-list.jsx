import React, { Component } from "react";
import EventEntry from "./event-entry.jsx"

import { generateEventURL } from '../../_helper.jsx'

const EventList = (props) => {

  const generateEventList = props.eventsList.map ((event, index) => {
    return <EventEntry userID={props.userID} event={event} key={index} handleDestroy={props.handleDestroy}/>
  })

  return (
    <div className="eventList">
      <h1>Events</h1>
      {generateEventList}
    </div>
  )
}


export default EventList;