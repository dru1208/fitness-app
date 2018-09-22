import React, { Component } from 'react';
import BlogEntry from "./BlogEntry.jsx"






const BlogList = (props) => {

  const generateBlogList = props.blogArray.map((blog, index) => {
    <BlogEntry blog={blog} key={index}/>
  })


  return (
    <div>
      {generateBlogList}
    </div>
  )
}





export default BlogList;