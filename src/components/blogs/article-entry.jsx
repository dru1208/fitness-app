import React from 'react'
import axios from 'axios'

const ArticleEntry = (props) => {
  return (
    <div className="articleEntryWrapper">
      <article className="articleEntry border">
        <h3 className="articleEntryHeader">{props.article.title}</h3>
        <a className="articleEntryLink" href={props.article.link}>{props.article.link}</a>
        <form onSubmit={props.handleArticleDestroy}>
          <input type="hidden" name="articleID" value={props.article.id} />
          <input className="articleEntryDelete" type="submit" value="Delete" />
        </form>
      </article>
    </div>
  )
}

export default ArticleEntry