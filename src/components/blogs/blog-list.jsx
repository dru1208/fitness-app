import React, { Component } from 'react';
import BlogEntry from "./blog-entry.jsx"

const BlogList = (props) => {
  return (
    <div>
      <BlogEntry userID={props.userID}/>
    </div>
  )
}

export default BlogList;