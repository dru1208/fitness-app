import React from 'react'
import axios from 'axios'

export default class EventEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      id: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/events')
      .then((response) => {
        const data = response.data;
        this.setState({data})
        this.state.data.forEach((x, index) => {
          this.state.id.push(index)})
      })
  }

  _handleDestroy = (e) => {
    e.preventDefault();
    // console.log('name is here', entries.id)
    // axios.delete('http://localhost:3000/api/events/:id', { id: id })
  }

  render() {
    console.log('events', this.state.data)
    return (
      <div>
      { this.state.data.map((entries, index) =>
        <form onSubmit={this._handleDestroy} key={index}>
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
