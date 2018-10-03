import React from 'react'


const BlogEntry = (props) => {
  return (
    <div className="blogEntryWrapper">
      <article className="blogEntry border">
        <h3 className="blogEntryHeader">{props.blog.title}</h3>
        <div className="blogEntryContent">{props.blog.content}</div>
        <form onSubmit={props.handleBlogDestroy}>
          <input type="hidden" name="blogID" value={props.blog.id} />
          <input className="blogEntryDelete" type="submit" value="Delete" />
        </form>
      </article>
    </div>
  )
}

export default BlogEntry