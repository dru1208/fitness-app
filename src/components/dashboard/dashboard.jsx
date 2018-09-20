import React, { Component } from "react";
import Activities from './weekly-activities.jsx';
import Nutrition from './nutrition.jsx'

//HARDCODED DATABASE TABLES
const weekly_data = {
  user_id: 1,
  sun: 30,
  mon: 120,
  tues: 60,
  wed: 90,
  thurs: 0,
  fri: 0,
  sat: 10
}

const daily_nutrition = {
  user_id: 1,
  calories: 1500,
  protein: 80,
  fat: 100,
  carbohydrates: 0
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: "Vincent",
      weekly: JSON.stringify(weekly_data),
      nutrition: JSON.stringify(daily_nutrition)
    };
  }

  render() {
    return (
      <main class="dashboard">
        <h1>Welcome</h1>
        <Activities weekly={this.state.weekly}/>
        <Nutrition nutrition={this.state.nutrition}/>
      </main>
    );
  }

}