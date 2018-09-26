import React from 'react'
import axios from 'axios'
import { generateEventURL, generateUserURL } from '../../_helper.jsx'

export default class EventEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      userID: [this.props.userID]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/events')
      .then((response) => {
        const data = response.data;
        this.setState({data})
      })
  }

  _handleDestroy = (e) => {
    e.preventDefault();
    console.log(generateEventURL(e.target.eventID.value))
    const options = {
      method: "DELETE",
      headers: {'content-type': 'application/json'},
      data: e.target.eventID.value,
      url: generateEventURL(e.target.eventID.value)
    }
    axios(options)
      .then((response) => {
        if (response.data) {
          this.setState({data: response.data})
          // this.props.history.push(generateUserURL(this.state.userID, "events"))
        }
      })
  }

  render() {
    console.log('ldksaflkdsa', this.state.data)
    return (
      <div>
      { this.state.data.map((entries, index) =>
          <div className="single-event" key={index}>
            <form onSubmit={this._handleDestroy} key={index}>
              <input type="hidden" name="eventID" value={entries.id} />
              <span className="event-name">{entries.name}</span>
              <div className="event-description">{entries.description}</div>
              <div className="event-datetime-location">{entries.location} • {entries.datetime}</div>
              <input type="submit" value="Delete Event"/>
            </form>
          </div>
      )}
      </div>
    )
  }
}
