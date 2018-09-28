import React from 'react'
import axios from 'axios'
import BlogHeader from './blog-header.jsx'
import BlogList from './blog-list.jsx'
import BlogForm from './blog-form.jsx'
import ArticleList from './article-list.jsx'
import ArticleForm from './article-form.jsx'


class BlogMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userID: this.props.userID,
      name: this.props.name
    }
  }
    render() {
    return(
      <main>
        <BlogHeader name={this.state.name}/>
        <BlogForm userID={this.state.userID}/>
        <h2> Blogs </h2>
        <BlogList userID={this.state.userID}/>
        <h2> Articles </h2>
        <ArticleForm userID={this.state.userID}/>
        <ArticleList userID={this.state.userID}/>
      </main>
    )}
}

export default BlogMain;