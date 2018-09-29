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
        data.sort(function(a, b) {
          let dateA = new Date(a.datetime)
          let dateB = new Date(b.datetime)
          return dateA - dateB
        })
        this.setState({data})
        console.log(data);
      })
  }

  _handleCheckbox = (e) => {
    console.log("id is " + e.target.value)
    axios.patch('http://localhost:3000/api/fitness_goals/' + e.target.value, {
      id: e.target.value,
      completed: e.target.checked
    })
    .then((response) => {

    })
  }

  generateCheckBox = (entry) => {
    if (entry.completed === false) {
      return <input type="checkbox" value={entry.id} onClick={this._handleCheckbox} />
    } else {
      return <input type="checkbox" value={entry.id} defaultChecked="true" onClick={this._handleCheckbox} />
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
