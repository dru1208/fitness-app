import React, { Component } from 'react';

const Feed = (props) => {
  return (
    <div className="single-feed">
      <div className="single-feed">
        <a href="https://www.w3schools.com">{props.title}</a>
      </div>
    </div>

  )
}

export default Feed;