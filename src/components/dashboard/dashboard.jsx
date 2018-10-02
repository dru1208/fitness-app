import React, { Component } from "react";
import { css } from 'emotion';
import WeeklyActivities from './weekly-activities/weekly-activities.jsx';
import Nutrition from './nutrition.jsx';
import EventList from './event-list/event-list.jsx';
import FeedList from './feed-list/feed-list.jsx';
import FitnessGoals from './fitness-goals/fitness-goals.jsx'
import EventEntry from './event-list/event-entry.jsx'
import FeedEntry from './feed-list/feed-entry.jsx'



export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: props.name,
      user_id: props.userID,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <main className="dashboardPage">
        <div className="dashboardHeader">
          <h1>
            Welcome Back, {this.state.currentUser}
          </h1>
        </div>
        <FitnessGoals user_id={this.state.user_id} />
        <WeeklyActivities user_id={this.state.user_id} />
        <Nutrition nutrition={this.state.nutrition} user_id={this.state.user_id} />
        <EventList />
        <FeedList />
      </main>
    );
  }
}

// check how to limit event entry json from backend to only 3-5 events