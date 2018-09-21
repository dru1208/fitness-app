import React from 'react'

const EventForm = () {


  return (
    <div>
      <h2>Create your new event here!</h2>
      <form>
        <label htmlFor="name">Event Name</label>
        <input type="text" name="name"/><br/>
        <label htmlFor="description">Description</label>
        <textarea name="description" />
      </form>
    </div>
  )
}