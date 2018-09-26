import React, { Component } from 'react';

const Event = (props) => {
  return (
    <div className="single-event">
      <div className="event-name">{props.name}</div>
      <div className="event-description">{props.description}</div>
      <div className="event-datetime-location">{props.location} • {props.datetime}</div>
    </div>

  )
}

export default Event;