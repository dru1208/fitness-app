import React from 'react'
import BlogHeader from './blog-header.jsx'
import BlogList from './blog-list.jsx'
import BlogForm from './blog-form.jsx'
import ArticleList from './article-list.jsx'


const user = {first_name: "andrew"}

const BlogMain = (props) => {
  return(
    <main>
      <BlogHeader user={user}/>
      <BlogForm />
      <h2> Blogs </h2>
      <BlogList />
      <h2> Articles </h2>
      <ArticleList />
    </main>
  )
}

export default BlogMain;