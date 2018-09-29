import React, { Component } from 'react';
import ArticleEntry from "./article-entry.jsx"

const ArticleList = (props) => {
  return (
    <div>
      <ArticleEntry userID={props.userID}/>
    </div>
  )
}

export default ArticleList;