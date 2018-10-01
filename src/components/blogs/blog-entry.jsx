import React from 'react'
import axios from 'axios'


const BlogEntry = (props) => {

  return (
    <div className="blogEntryWrapper">
      <article className="blogEntry border">
        <header>
          <h3>{props.blog.title}</h3>
        </header>
          <div style={{"white-space": "pre-line"}}>{props.blog.content}</div>
        <footer>
          <div>icon like here</div>
        </footer>
      </article>
    </div>
  )
}

export default BlogEntry