import React, { Component } from "react";
import Activities from './weekly-activities.jsx';
import Nutrition from './nutrition.jsx';
import Events from './events.jsx';
import Feed from './feed.jsx';


//HARDCODED DATABASE TABLES
const weekly_data = {
  user_id: 1,
  sun: 30,
  mon: 120,
  tues: 0,
  wed: 90,
  thurs: 160,
  fri: 200,
  sat: 10
}

const daily_nutrition = {
  user_id: 1,
  calories: 1500,
  protein: 80,
  fat: 100,
  carbohydrates: 250
}

const events = {
  id: 1,
  user_id: 1,
  name: "Group Wrestle",
  description: "Wrestling WWE style ROYAL RUMBLE!!!",
  datetime: "Sept. 30, 2018 4:00PM",
  location: "46 Spadina Ave, Toronto ON"
}

const feed = {
  id: 1,
  user_id: 1,
  title: "10 fitness tips to get fitter",
  content: "This is some quality content"
}

const weekly_data_stringed = JSON.stringify(weekly_data)
const daily_nutrition_stringed = JSON.stringify(daily_nutrition)
const events_stringed = JSON.stringify(events)
const feed_stringed = JSON.stringify(feed)

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: "Vincent",
      weekly: weekly_data_stringed,
      nutrition: daily_nutrition_stringed,
      events: events_stringed,
      feed: feed_stringed
    };
  }

  render() {
    return (
      <main className="nutrition-page">
      </main>
    );
  }

}