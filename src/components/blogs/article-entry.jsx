import React from 'react'
import axios from 'axios'

const ArticleEntry = (props) => {
  return (
    <div className="articleEntryWrapper">
      <article className="articleEntry">
        <header>
          <h3>{props.article.title}</h3>
        </header>
          <p>{props.article.link}</p>
        <footer>
          <div>icon like here</div>
        </footer>
      </article>
    </div>
  )
}

export default ArticleEntry