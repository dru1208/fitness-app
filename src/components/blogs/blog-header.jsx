import React, { Component } from 'react';

const BlogHeader = (props) => {
  return (
    <div>
      <h2>{props.user.first_name}'s Blog Post</h2>
    </div>
  )
}





export default BlogHeader;