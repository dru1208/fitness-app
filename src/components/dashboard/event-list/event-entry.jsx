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
        data.sort(function(a, b) {
          let dateA = new Date(a.datetime)
          let dateB = new Date(b.datetime)
          return dateA - dateB
        })
        const slicedData = data.slice(0,5)
        this.setState({data: slicedData})
      })
  }

  render() {
    return (
      <div className="dashboardEventEntry">
        { this.state.data.map((entry, index) =>
          <div className="dashboardSingleEventEntry" key={index}>
            <h3 >{entry.name}</h3>
            <div className="event-description dashboardContent">{entry.description}</div>
            <div className="event-datetime-location dashboardContent">{entry.location} • {entry.datetime.split('T')[0]}</div>
          </div>
        )}
      </div>
    )
  }
}