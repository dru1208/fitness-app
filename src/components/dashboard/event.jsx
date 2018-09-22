import React, { Component } from 'react';

const Event = (props) => {
  return (
    <div className="single-event">
      <a href="https://www.w3schools.com">{props.name}</a>
      <div className="event-description">{props.description}</div>
      <div className="event-datetime-location">{props.location} • {props.datetime}</div>
    </div>

  )
}

export default Event;