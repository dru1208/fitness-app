import React, { Component } from "react";
import Activities from './weekly-activities.jsx';
import Nutrition from './nutrition.jsx';
import EventList from './eventlist.jsx';
import FeedList from './feedlist.jsx';


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
  fat: 40,
  carbohydrates: 250
}

const events = [{
  id: 1,
  user_id: 1,
  name: "Group Wrestle",
  description: "Wrestling WWE style ROYAL RUMBLE!!!",
  datetime: "Sept. 30, 2018 4:00PM",
  location: "46 Spadina Ave, Toronto ON"
}, {
  id: 2,
  user_id: 2,
  name: "Hot Yoga",
  description: "Very hot yoga",
  datetime: "Sept. 28, 2018 4:00PM",
  location: "46 Spadina Ave, Toronto ON"
}, {
  id: 3,
  user_id: 1,
  name: "Fun in the Sun",
  description: "Having fun in the sun",
  datetime: "Sept. 22, 2018 4:30PM",
  location: "46 Spadina Ave, Toronto ON"
}]

const feeds = [{
  id: 1,
  user_id: 1,
  title: "How to bench press with a towel",
  content: "Quality HD video"
},{
  id: 2,
  user_id: 1,
  title: "10 fitness tips to get fitter, the 3rd one might shock you",
  content: "This is some quality content no clickbait"
},{
  id: 3,
  user_id: 1,
  title: "$1 Diet vs $150 Diet",
  content: "Which diet is more worth it at its given price point?"
}]


//state should not be string when api is in use
const weekly_data_stringed = JSON.stringify(weekly_data)
const daily_nutrition_stringed = JSON.stringify(daily_nutrition)

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: "Vincent",
      weekly: weekly_data_stringed,
      nutrition: daily_nutrition_stringed,
      events: events,
      feeds: feeds
    };
  }

  render() {
    return (
      <main className="dashboard">
        <h1>Welcome, {this.state.currentUser}</h1>
        <h2>
          Your Current Fitness Goals: <br />
        </h2>
        <div className="fitness-goals">
          <span> Run 5km </span> <input type="checkbox" /> <br />
          <span> Lose 10 lbs </span> <input type="checkbox"/> <br />
          <span> Wrestle with Andrew </span> <input type="checkbox"/>
        </div>

        <Activities weekly={this.state.weekly}/>
        <Nutrition nutrition={this.state.nutrition}/>
        <EventList events={this.state.events}/>
        <FeedList feed={this.state.feeds}/>
      </main>
    );
  }

}