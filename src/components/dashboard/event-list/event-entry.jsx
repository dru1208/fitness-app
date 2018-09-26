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
        { this.state.data.map((entry, index) =>
          <div className="single-event" key={index}>
            <div >{entry.name}</div>
            <div className="event-description">{entry.description}</div>
            <div className="event-datetime-location">{entry.location} • {entry.datetime}</div>
          </div>
        )}
      </div>
    )
  }
}