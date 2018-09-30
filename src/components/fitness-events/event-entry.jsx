import React from 'react'


const EventEntry = (props) => {

  const generateDeleteButton = () => {
    if (props.userID === props.event.user_id) {
      return <input type="submit" value="Delete Event" />
    }
  }

  return (
    <div className="eventEntry border">
      <form onSubmit={props.handleDestroy}>
        <input type="hidden" name="eventID" value={props.event.id} />
        <span className="event-name">{props.event.name}</span>
        <div className="event-description">{props.event.description}</div>
        <div className="event-datetime-location">{props.event.location} • {props.event.datetime}</div>
        {generateDeleteButton()}
      </form>
    </div>
  )
}

export default EventEntry
