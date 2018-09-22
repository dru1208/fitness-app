import React from 'react'
import BlogHeader from './blog-header.jsx'
import BlogList from './blog-list.jsx'
import BlogForm from './blog-form.jsx'


const user = {first_name: "andrew"}
const blogExampleList = [
  {user_id: 1, title: "hello", content: "this is a test trial."},
  {user_id: 2, title: "cool", content: "this is very cool"},
  {user_id: 3, title: "nice stuff", content: "this is very very nice stuff"}
]


const BlogMain = (props) => {
  return(
    <main>
      <BlogHeader user={user}/>
      <BlogForm />
      <BlogList blogsArray={blogExampleList}/>
    </main>
  )
}

export default BlogMain;