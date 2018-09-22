import React from 'react'

const EventForm = () {


  return (
    <div>
      <h2>Create your new event here!</h2>
      <form>
        <label htmlFor="eventName">Event Name</label>
        <input type="text" name="eventName"/><br/>
        <label htmlFor="eventDescription">Description</label>
        <textarea name="eventDescription" /><br/>
        <label htmlFor=""

        <label htmlFor="eventDate">Date</label>
        <input type="date" name="eventDate" /><br/>
      </form>
    </div>
  )
}