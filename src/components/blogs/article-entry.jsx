import React from 'react'
import axios from 'axios'

const ArticleEntry = (props) => {
  return (
    <div className="articleEntryWrapper">
      <article className="articleEntry border">
        <header>
          <h3>{props.article.title}</h3>
        </header>
          <a href={props.article.link}>{props.article.link}</a>
        <footer>
          <div>icon like here</div>
        </footer>
      </article>
    </div>
  )
}

export default ArticleEntry