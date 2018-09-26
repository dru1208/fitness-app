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
        this.setState({data})
      })
  }

  generateCheckBox = () => {
    console.log("hello")
    if (this.state.data.completed === false) {
      return <input type="checkbox" value="completed"/>
    } else {
      return <input type="checkbox" value="completed" defaultunchecked/>
    }
  }

  render() {
    return (
      <div>
      { this.state.data.map(entries =>
        <div className="single-goal">
          <span>{entries.description} | {entries.datetime}</span>
          {this.generateCheckBox()}
        </div>
      )}
      </div>
    )
  }
}
