import React, { Component } from "react";

export default class Feed extends Component {

  render() {
    const feed = JSON.parse(this.props.feed);
    return (
      <main class="events">
        <h1>Feed</h1>
        <a href="https://www.w3schools.com">{feed.title}</a>
      </main>
    )
  }
}
