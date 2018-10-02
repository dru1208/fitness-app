import React from 'react'
import axios from 'axios'

const ArticleEntry = (props) => {
  return (
    <div className="articleEntryWrapper">
      <article className="articleEntry border">
        <header>
          <h3>{props.article.title}</h3>
        </header>
          <p>{props.article.link}</p>
      </article>
    </div>
  )
}

export default ArticleEntry