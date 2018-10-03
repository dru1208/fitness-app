import React from 'react'
import axios from 'axios'
import BlogHeader from './blog-header.jsx'
import BlogList from './blog-list.jsx'
import BlogForm from './blog-form.jsx'
import ArticleList from './article-list.jsx'
import ArticleForm from './article-form.jsx'
import { generateBlogURL } from '../../_helper.jsx'
import { generateArticleURL } from '../../_helper.jsx'

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

  _handleBlogDestroy = (e) => {
    e.preventDefault();
    const options = {
      method: "DELETE",
      headers: {'content-type': 'application/json'},
      data: {id: e.target.blogID.value, user_id: this.state.userID},
      url: generateBlogURL(e.target.blogID.value)
    }
    axios(options)
      .then((response) => {
        if (response.data) {
          response.data.reverse()
          this.setState({blogsList: response.data})
        }
      })
  }

  _handleArticleDestroy = (e) => {
    e.preventDefault();
    const options = {
      method: "DELETE",
      headers: {'content-type': 'application/json'},
      data: {id: e.target.articleID.value, user_id: this.state.userID},
      url: generateArticleURL(e.target.articleID.value)
    }
    axios(options)
      .then((response) => {
        if (response.data) {
          response.data.reverse()
          this.setState({articlesList: response.data})
        }
      })
  }

    render() {
      return(
        <main className="profilePage" >
          <div className="profileHeader">{this.state.name}'s Profile</div>
          <BlogForm userID={this.state.userID} handleNewBlog={this._handleNewBlog} />
          <BlogList userID={this.state.userID} blogsList={this.state.blogsList} handleBlogDestroy={this._handleBlogDestroy}/>
          <ArticleForm userID={this.state.userID} handleNewArticle={this._handleNewArticle} />
          <ArticleList userID={this.state.userID} articlesList = {this.state.articlesList} handleArticleDestroy={this._handleArticleDestroy} />
        </main>
    )}
}

export default BlogMain;