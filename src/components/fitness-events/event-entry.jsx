import React from 'react'


const EventEntry = (props) => {
  return(
    <div className="single-event">
      <form onSubmit={props.handleDestroy}>
        <input type="hidden" name="eventID" value={props.event.id} />
        <span className="event-name">{props.event.name}</span>
        <div className="event-description">{props.event.description}</div>
        <div className="event-datetime-location">{props.event.location} • {props.event.datetime}</div>
        <input type="submit" value="Delete Event"/>
      </form>
    </div>
  )
}

export default EventEntry
