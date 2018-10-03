import React from 'react';
import ArticleEntry from "./article-entry.jsx"

const ArticleList = (props) => {

  const generateArticleList = props.articlesList.map ((article, index) => {
    return <ArticleEntry article={article} key={index} handleArticleDestroy={props.handleArticleDestroy}/>
  })

  return (
    <div className="articleList">
    <h2>My Articles</h2>
      {generateArticleList}
    </div>
  )
}

export default ArticleList;