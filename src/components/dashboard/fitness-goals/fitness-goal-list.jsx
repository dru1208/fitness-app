import React, { Component } from 'react';
import FitnessGoal from './fitness-goal.jsx';
import GoalForm from './fitness-goal-form.jsx';
import GoalEntry from './fitness-goal-entry.jsx';
import axios from 'axios';

class GoalList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.user_id,
      data: null
    }
  }

  componentDidMount() {
    this.getGoals();
  }

  getGoals = () => {
    axios.get('http://localhost:3000/api/fitness_goals', {
      params: {
        user_id: this.state.user_id
      }
    })
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
  };

  generateCheckBox = (entry) => {
    if (entry.completed === false) {
      return <input type="checkbox" value={entry.id} onClick={this._handleCheckbox} />
    } else {
      return <input type="checkbox" value={entry.id} defaultChecked="true" onClick={this._handleCheckbox} />
    }
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

  render() {
    if (this.state.data) {
      return (
        <main className="dashboardGoalList">
          <h1>Recent Goals</h1>
          <div className="dashboardGoalCheckbox">
            <GoalForm user_id={this.state.user_id} />
            <div className="dashboardGoalEntry">
              { this.state.data.map((entry, index) =>
                <div className="single-goal" key={index}>
                  <span>{entry.description} | {entry.datetime.split('T')[0]}</span>
                  {this.generateCheckBox(entry)}
                </div>
              )}
            </div>

          </div>
        </main>
      )
    } else {
      return (
        <main className="dashboardGoalList">
          <h1>Recent Goals</h1>
          <div className="dashboardGoalCheckbox">
            <GoalForm user_id={this.state.user_id} />
          </div>
        </main>
      )
    }
  }
}

export default GoalList;

