import React, { Component } from "react";
import Feed from "./feed.jsx";

const FeedList = (props) => {
  const generateFeedList = props.feed.map((f) => {
      return <Feed feed={f} title={f.title} content={f.content} />
    })

  return (
  <main className="feeds">
    <h1>Feed</h1>
      {generateFeedList}
  </main>
  )
}

export default FeedList;