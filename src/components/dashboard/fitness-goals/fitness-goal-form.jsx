import React, { Component } from 'react';
import axios from 'axios';

import { generateCurrentDateTime } from "../../../_helper.jsx"

class GoalForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      user_id: this.props.user_id,
      description: "",
      datetime: new Date()
    }
  }

  handleDescriptionChange = (e) => {
    this.setState( {description: e.target.value} )
  }

  handleDateChange = (e) => {
    this.setState( {datetime: e.target.value} )
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    let description = this.state.description
    let datetime = this.state.datetime
    axios.post('http://localhost:3000/api/fitness_goals', {
      user_id: this.state.user_id,
      description: description,
      datetime: datetime
    }).then((response) => {
      this.props.getGoals();
    })
  }

  render() {
    return (
    <div className="dashboardGoalForm">
      <form onSubmit={this._handleSubmit} className="newGoalForm">
        <label htmlFor="goalDescription">Enter Goal:</label><br />
        <textarea className="dashboardGoalTextarea" name="goalDescription" onChange={this.handleDescriptionChange} /><br/>
        <label htmlFor="goalDate">Date:</label><br/>
        <input type="datetime-local" name="goalDate" defaultValue={generateCurrentDateTime()} onChange={this.handleDateChange}/><br/>
        <input type="submit"/>
      </form>
    </div>
  )}
};





export default GoalForm;