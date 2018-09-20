import React, { Component } from "react";

export default class Feed extends Component {

  render() {
    const feed = JSON.parse(this.props.feed);
    return (
      <main className="events">
      <h1>Feed</h1>
        <div className="single-event">
          <a href="https://www.w3schools.com">{feed.title}</a>
        </div>
        <div className="single-event">
          <a href="https://www.w3schools.com">{feed.title}</a>
        </div>
        <div className="single-event">
          <a href="https://www.w3schools.com">{feed.title}</a>
        </div>
      </main>
    )
  }
}
