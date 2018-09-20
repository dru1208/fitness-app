import React, { Component } from "react";
import Activities from './weekly-activities.jsx';
import Nutrition from './nutrition.jsx';
import Events from './events.jsx'

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

const events = {
  id: 1,
  user_id: 1,
  name: "Group Wrestle",
  description: "Wrestling WWE style ROYAL RUMBLE!!!",
  datetime: "Sept. 30, 2018 4:00PM",
  location: "46 Spadina Ave, Toronto ON"
}

const weekly_data_stringed = JSON.stringify(weekly_data)
const daily_nutrition_stringed = JSON.stringify(daily_nutrition)
const events_stringed = JSON.stringify(events)

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: "Vincent",
      weekly: weekly_data_stringed,
      nutrition: daily_nutrition_stringed,
      events: events_stringed
    };
  }

  render() {
    return (
      <main class="dashboard">
        <h1>Welcome, {this.state.currentUser}</h1>
        <h2>
          Your Current Fitness Goals: <br />
        </h2>
        <div class="fitness-goals">
          <goal> Run 5km </goal> <input type="checkbox" checked="checked" /> <br />
          <goal> Lose 10 lbs </goal> <input type="checkbox" checked /> <br />
          <goal> Wrestle with Andrew </goal> <input type="checkbox" checked />
        </div>

        <Activities weekly={this.state.weekly}/>
        <Nutrition nutrition={this.state.nutrition}/>
        <Events events={this.state.events}/>
      </main>
    );
  }

}