import React from 'react'
import axios from 'axios'
import { css } from 'emotion'
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
      name: this.props.name,
      blogsList: [],
      articlesList: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/blogs', {params: {user_id: this.state.userID}})
      .then((response) => {
        response.data.reverse()
        this.setState({blogsList: response.data})
        console.log(this.state.blogsList[4].content)
      })

    axios.get('http://localhost:3000/api/articles', {params: {user_id: this.state.userID}})
      .then((response) => {
        response.data.reverse()
        this.setState({articlesList: response.data})
      })
  }

  _handleNewArticle = (newArticleArray) => {
    newArticleArray.reverse()
    this.setState({articlesList: newArticleArray})
  }


  _handleNewBlog = (newBlogArray) => {
    newBlogArray.reverse()
    this.setState({blogsList: newBlogArray})
  }

    render() {
      return(
        <main className="profilePage" >
          <div className="profileHeader">{this.state.name}'s Profile</div>
          <BlogForm userID={this.state.userID} handleNewBlog={this._handleNewBlog} />
          <BlogList userID={this.state.userID} blogsList={this.state.blogsList} />
          <ArticleForm userID={this.state.userID} handleNewArticle={this._handleNewArticle} />
          <ArticleList userID={this.state.userID} articlesList = {this.state.articlesList} />
        </main>
    )}
}

export default BlogMain;