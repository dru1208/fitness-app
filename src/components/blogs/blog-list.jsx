import React, { Component } from 'react';
import BlogEntry from "./blog-entry.jsx"

const BlogList = (props) => {

  const generateBlogList = props.blogsList.map ((blog, index) => {
    return <BlogEntry blog={blog} key={index} />
  })

  return (
    <div className="blogList">
    <h2>My Blogs</h2>
      {generateBlogList}
    </div>
  )
}

export default BlogList;