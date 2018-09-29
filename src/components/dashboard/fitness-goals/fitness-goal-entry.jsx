import React from 'react'
import axios from 'axios'

export default class GoalEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/fitness_goals')
      .then((response) => {
        const data = response.data;
        console.log(data, typeof data)
        this.setState({data})
      })
  }

  generateCheckBox = (entry) => {
    console.log("hello")
    if (entry.completed === false) {
      return <input type="checkbox" defaultunchecked="true"/>
    } else {
      return <input type="checkbox" defaultChecked="true"/>
    }
  }

  render() {
    return (
      <div>
      { this.state.data.map((entry, index) =>
        <div className="single-goal" key={index}>
          <span>{entry.description} | {entry.datetime.split('T')[0]}</span>
          {this.generateCheckBox(entry)}
        </div>
      )}
      </div>
    )
  }
}
