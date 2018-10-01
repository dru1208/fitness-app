import React, { Component } from 'react';
import axios from 'axios';

import { generateCurrentDateTime } from "../../_helper.jsx"

class EventForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      userID: this.props.userID,
      name: "",
      description: "",
      location: "",
      datetime: ""
    }
  }


  _handleTitleChange = (e) => {
    this.setState( {name: e.target.value} )
  }

  _handleDescriptionChange = (e) => {
    this.setState( {description: e.target.value} )
  }

  _handleLocationChange = (e) => {
    this.setState( {location: e.target.value} )
  }

  _handleDateChange = (e) => {
    this.setState( {datetime: e.target.value} )
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    let name = this.state.name
    let description = this.state.description
    let location = this.state.location
    let datetime = this.state.datetime
    let userID = this.state.userID
    axios.post('http://localhost:3000/api/events', {
      id: userID,
      name: name,
      description: description,
      location: location,
      datetime: datetime
    }).then((response) => {
        this.props.handleNewEvent(response.data)
    })
  }

  render() {
    return (
    <div className="eventForm border">
      <h3>Create your new event here!</h3>
      <form onSubmit={this._handleSubmit} className="newEventForm">
        <label htmlFor="eventName">Event Name: </label>
        <input type="text" name="eventName" onChange={this._handleTitleChange}/>
        <label htmlFor="eventDescription">Description: </label>
        <textarea name="eventDescription" onChange={this._handleDescriptionChange} />
        <label htmlFor="eventLocation">Location: </label>
        <textarea placeholder="e.g. 46 Spadina, Toronto" name="eventLocation" onChange={this._handleLocationChange}/>
        <label htmlFor="eventDate">Date: </label>
        <input type="datetime-local" name="eventDate" defaultValue={generateCurrentDateTime()} onChange={this._handleDateChange}/>
        <input type="submit" value="Create Event"/>
      </form>
    </div>
  )}
};





export default EventForm;