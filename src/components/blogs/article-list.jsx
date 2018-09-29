import React, { Component } from 'react';
import ArticleEntry from "./article-entry.jsx"

const ArticleList = (props) => {

  const generateArticleList = props.articlesList.map ((article, index) => {
    return <ArticleEntry article={article} key={index}/>
  })

  return (
    <div>
      {generateArticleList}
    </div>
  )
}

export default ArticleList;