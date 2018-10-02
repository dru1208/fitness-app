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
          <form onSubmit={props.handleArticleDestroy}>
          <input type="hidden" name="articleID" value={props.article.id} />
          <input type="submit" value="Delete" />
        </form>
        </footer>
      </article>
    </div>
  )
}

export default ArticleEntry