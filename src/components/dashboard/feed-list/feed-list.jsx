import React, { Component } from "react";
import Feed from "./feed.jsx";




const FeedList = (props) => {
  const generateFeedList = props.feed.map((f, index) => {
      return <Feed feed={f} title={f.title} content={f.content} key={index}/>
    })

  return (
  <main className="feeds">
    <h1>Feed</h1>
      {generateFeedList}
  </main>
  )
}

export default FeedList;