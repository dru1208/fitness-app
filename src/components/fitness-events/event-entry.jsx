import React from 'react'
import axios from 'axios'




export default class EventEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/events')
      .then((response) => {
        const data = response.data;
        this.setState({data})
      })
  }

  render() {
    return (
      <div>
      { this.state.data.map(entries =>
        <div className="single-event">
          <a href="https://www.w3schools.com">{entries.name}</a>
          <div className="event-description">{entries.description}</div>
          <div className="event-datetime-location">{entries.location} • {entries.datetime}</div>
        </div>
      )}
      </div>
    )
  }
}
