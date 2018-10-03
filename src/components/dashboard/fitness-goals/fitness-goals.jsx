import React, { Component } from 'react';
import GoalForm from './fitness-goal-form.jsx';
import GoalList from './fitness-goal-list.jsx'
import axios from 'axios';

import { generateFitnessGoalDeleteURL } from '../../../_helper.jsx'

class FitnessGoals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.user_id,
      data: []
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
    axios.patch('http://localhost:3000/api/fitness_goals/' + e.target.value, {
      id: e.target.value,
      completed: e.target.checked
    })
  }


  _handleDeleteGoal = (e) => {
    e.preventDefault();
    axios.delete(generateFitnessGoalDeleteURL(e.target.value), {
      params: {
        id: e.target.value,
        user_id: this.state.user_id
      }
    }).then((response) => {
      if (response.data) {
        this.setState({data: response.data})
      }
    })
  }

  render() {
    return (
      <main className="dashboardGoals border">
        <h3 className="dashboardGoalHeader">Recent Goals</h3>
        <div className="dashboardGoalInfo">
          <GoalForm user_id={this.state.user_id} getGoals={this.getGoals} />
          <GoalList generateCheckBox={this.generateCheckBox} data={this.state.data} handleDeleteGoal={this._handleDeleteGoal} />
        </div>
      </main>
    )

  }
}

export default FitnessGoals;

