import React from 'react'


const EventEntry = (props) => {

  const generateDeleteButton = () => {
    if (props.userID === props.event.user_id) {
      return <input type="submit" value="Delete Event" className="event-delete" />
    }
  }


  let date = props.event.datetime;
  let splitDate = date.split('T')
  let dateStr = splitDate.slice(0,1);
  let timeStr = splitDate.slice(1,2);
  let splitTimeStr = timeStr[0].split('.');
  let time = splitTimeStr[0];
  let timeResult = dateStr + " " + time;


  return (

    <div className="eventEntry border">
      <form onSubmit={props.handleDestroy} className="eventEntryForm">
        <input type="hidden" name="eventID" value={props.event.id} />
        <h3 className="event-name">{props.event.name}</h3>
        <div className="event-description">{props.event.description}</div>
        <div className="event-datetime-location">{props.event.location} • {timeResult}</div>

        {generateDeleteButton()}
      </form>
    </div>
  )
}

export default EventEntry
