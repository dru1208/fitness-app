import React, { Component } from "react";
import Activities from './weekly-activities/weekly-activities.jsx';
import Nutrition from './nutrition.jsx';
import EventList from './event-list/event-list.jsx';
import FeedList from './feed-list/feed-list.jsx';
import GoalList from './fitness-goals/fitness-goal-list.jsx'
import EventEntry from './event-list/event-entry.jsx'
import FeedEntry from './feed-list/feed-entry.jsx'


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

const fitnessGoalsTest = [
  {description: "Run 5km", completed: false},
  {description: "Lose 10 lbs", completed: true},
  {description: "Wrestle with Andrew", completed: true},
  {description: "be fat", completed: false}
]


//state should not be string when api is in use
const weekly_data_stringed = JSON.stringify(weekly_data)
const daily_nutrition_stringed = JSON.stringify(daily_nutrition)

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: props.name,
      id: props.id,
      weekly: weekly_data,
      nutrition: daily_nutrition,
      events: events,
      feeds: feeds,
      fitnessGoals: fitnessGoalsTest
    };
  }

  render() {
    return (
      <main className="dashboard">
        <h1>Welcome, {this.state.currentUser}</h1>

        <GoalList />
        <Activities />
        <Nutrition nutrition={this.state.nutrition}/>

        <EventList />
        <FeedList />
      </main>
    );
  }
}

// check how to limit event entry json from backend to only 3-5 events