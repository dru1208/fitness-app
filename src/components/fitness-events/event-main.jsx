import React, { Component } from 'react'
import EventList from './event-list.jsx'
import EventForm from './event-form.jsx'
import { generateEventURL } from '../../_helper.jsx'
import axios from 'axios'

class EventMain extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userID: this.props.userID,
      eventsList: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/events')
      .then((response) => {
        this.setState({eventsList: response.data})
      })
  }

  _handleDestroy = (e) => {
    e.preventDefault();
    const options = {
      method: "DELETE",
      headers: {'content-type': 'application/json'},
      data: {id: e.target.eventID.value},
      url: generateEventURL(e.target.eventID.value)
    }
    axios(options)
      .then((response) => {
        if (response.data) {
          this.setState({eventsList: response.data})
        }
      })
  }

  _handleNewEvent = (newEventArray) => {
    this.setState({eventsList: newEventArray})
  }


// note: reversed the eventsList prop for EventList in order to sort by most recent
  render() {
    return(
      <main className="eventPage" >
        <EventForm userID={this.state.userID}
          handleSubmit={this._handleSubmit}
          handleNewEvent={this._handleNewEvent}
        />

        <EventList userID={this.state.userID}
          eventsList={this.state.eventsList}
          handleDestroy={this._handleDestroy}
        />
      </main>
    )
  }


}

export default EventMain