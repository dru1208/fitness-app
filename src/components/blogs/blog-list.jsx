import React, { Component } from 'react';
import BlogEntry from "./blog-entry.jsx"

const BlogList = (props) => {

  const generateBlogList = props.blogsList.map ((blog, index) => {
    return <BlogEntry blog={blog} key={index} />
  })

  return (
    <div>
      {generateBlogList}
    </div>
  )
}

export default BlogList;