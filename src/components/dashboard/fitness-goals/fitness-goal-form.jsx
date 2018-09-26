import React, { Component } from 'react';
import axios from 'axios';

class GoalForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      description: "",
      datetime: ""
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
      description: description,
      datetime: datetime
    }).then((response) => {
        console.log(response)
      })
  }

  render() {
    return (
    <div>
      <h4>Enter Goals:</h4>
      <form onSubmit={this._handleSubmit} className="newGoalForm">
        <label htmlFor="goalDescription">Goal</label>
        <textarea name="goalDescription" onChange={this.handleDescriptionChange} /><br/>
        <label htmlFor="goalDate">Date</label>
        <input type="datetime-local" name="goalDate" onChange={this.handleDateChange}/><br/>
        <input type="submit"/>
      </form>
    </div>
  )}
};





export default GoalForm;