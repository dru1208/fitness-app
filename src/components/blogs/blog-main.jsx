import React from 'react'
import BlogHeader from './blog-header.jsx'
import BlogList from './blog-list.jsx'
import BlogForm from './blog-form.jsx'

import ArticleList from './article-list.jsx'
import ArticleForm from './article-form.jsx'


const user = {first_name: "andrew"}

const BlogMain = (props) => {
  return(
    <main>
      <BlogHeader user={user}/>
      <BlogForm userID={props.userID}/>
      <h2> Blogs </h2>
      <BlogList userID={props.userID}/>
      <h2> Articles </h2>
      <ArticleForm userID={props.userID}/>
      <ArticleList userID={props.userID}/>
    </main>
  )
}

export default BlogMain;