import React from 'react'


const BlogEntry = (props) => {

  return (
    <article className="container">
      <header>
        <h3>{props.blog.title}</h3>
      </header>
        <p>{props.blog.content}</p>
      <footer>
        <div>icon like here</div>
      </footer>
    </article>
  )
}

export default BlogEntry;