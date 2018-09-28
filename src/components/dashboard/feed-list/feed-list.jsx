import React, { Component } from "react";
import FeedEntry from "./feed-entry.jsx";




const FeedList = (props) => {

  return (
  <main className="feeds">
    <h1>Feed</h1>
      <FeedEntry />
  </main>
  )
}

export default FeedList;