import React from 'react'
import axios from 'axios'


const BlogEntry = (props) => {
  return (
    <div className="blogEntryWrapper">
      <article className="blogEntry border">
        <header>
          <h3>{props.blog.title}</h3>
        </header>
          <p>{props.blog.content}</p>
      </article>
    </div>
  )
}

export default BlogEntry