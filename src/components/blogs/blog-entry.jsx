import React from 'react'
import axios from 'axios'


const BlogEntry = (props) => {
  console.log('this is id', props.blog.id)
  return (
    <div className="blogEntryWrapper">
      <article className="blogEntry border">
        <header>
          <h3>{props.blog.title}</h3>
        </header>
          <div style={{"white-space": "pre-line"}}>{props.blog.content}</div>
        <footer>
        <form onSubmit={props.handleBlogDestroy}>
          <input type="hidden" name="blogID" value={props.blog.id} />
          <input type="submit" value="Delete" />
        </form>
        </footer>
      </article>
    </div>
  )
}

export default BlogEntry