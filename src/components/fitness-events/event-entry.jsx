import React from 'react'
import axios from 'axios'

export default class EventEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      id: 1
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
    let name = this.state.name
    let description = this.state.description
    let location = this.state.location
    let datetime = this.state.datetime
    let id = this.state.id
    axios.delete('http://localhost:3000/api/events/:id', { id: id })
  }

  render() {
    return (
      <div>
      { this.state.data.map(entries =>
        <form onSubmit={this._handleDestroy}>
          <div className="single-event">
            <span className="event-name">{entries.name}</span>
            <div className="event-description">{entries.description}</div>
            <div className="event-datetime-location">{entries.location} • {entries.datetime}</div>
            <input type="submit" value="Delete Event"/>
          </div>
        </form>
      )}
      </div>
    )
  }
}
