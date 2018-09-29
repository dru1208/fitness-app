import React from 'react'
import axios from 'axios'
import { css } from 'emotion'
import BlogHeader from './blog-header.jsx'
import BlogList from './blog-list.jsx'
import BlogForm from './blog-form.jsx'
import ArticleList from './article-list.jsx'
import ArticleForm from './article-form.jsx'


const profilePage = css`
  padding: 0 8em;
`

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

    render() {
      return(
        <main className={ profilePage } >
          <BlogHeader name={this.state.name}/>
          <BlogForm userID={this.state.userID} handleNewBlog={this._handleNewBlog} />
          <h2> Blogs </h2>
          <BlogList userID={this.state.userID} blogsList={this.state.blogsList} />
          <ArticleForm userID={this.state.userID} handleNewArticle={this._handleNewArticle} />
          <h2> Articles </h2>
          <ArticleList userID={this.state.userID} articlesList = {this.state.articlesList} />
        </main>
    )}
}

export default BlogMain;