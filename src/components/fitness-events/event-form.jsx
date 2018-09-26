import React, { Component } from 'react';
import axios from 'axios';

class EventForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name: "",
      description: "",
      location: "",
      datetime: ""
    }
  }

  // componentDidMount () => {
  //   axios.get()
  // }

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
    axios.post('http://localhost:3000/api/events', {
      name: name,
      description: description,
      location: location,
      datetime: datetime
    }).then((response) => {
        console.log(response)
      })
  }

  render() {
    return (
    <div>
      <h2>Create your new event here!</h2>
      <form onSubmit={this._handleSubmit} className="newEventForm">
        <label htmlFor="eventName">Event Name</label>
        <input type="text" name="eventName" onChange={this._handleTitleChange}/><br/>
        <label htmlFor="eventDescription">Description</label>
        <textarea name="eventDescription" onChange={this._handleDescriptionChange} /><br/>
        <label htmlFor="eventLocation">Location</label>
        <textarea placeholder="e.g. 46 Spadina, Toronto" name="eventLocation" onChange={this._handleLocationChange}/><br/>
        <label htmlFor="eventDate">Date</label>
        <input type="datetime-local" name="eventDate" onChange={this._handleDateChange}/><br/>
        <input type="submit"/>
      </form>
    </div>
  )}
};





export default EventForm;