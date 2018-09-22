import React from 'react'
import BlogHeader from './BlogHeader.jsx'
import BlogList from './BlogList.jsx'
import BlogForm from './BlogForm.jsx'


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