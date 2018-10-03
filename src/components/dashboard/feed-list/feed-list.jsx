import React from "react";
import FeedEntry from "./feed-entry.jsx";

const FeedList = (props) => {

  return (
  <div className="dashboardFeedList border">
    <h3>Feed</h3>
      <FeedEntry />
  </div>
  )
}

export default FeedList;