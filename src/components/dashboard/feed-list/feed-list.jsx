import React, { Component } from "react";
import FeedEntry from "./feed-entry.jsx";

const FeedList = (props) => {

  return (
  <div className="dashboardFeedList border">
    <h1>Feed</h1>
      <FeedEntry />
  </div>
  )
}

export default FeedList;