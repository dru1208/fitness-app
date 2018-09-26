import React, { Component } from 'react';
import axios from 'axios';

class BlogForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      title: "",
      content: "",
      userID: this.props.userID
    }
  }

  handleTitleChange = (e) => {
    this.setState( {title: e.target.value} )
    console.log('setting state title', this.state.title)
  }

  handleContentChange = (e) => {
    this.setState( {content: e.target.value} )
    console.log('setting state content', this.state.content)
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    let title = this.state.title
    let content = this.state.content
    let userID = this.state.userID
    axios.post('http://localhost:3000/api/blogs', {
      id: userID,
      title: title,
      content: content
    }).then((response) => {
        console.log(response)
      })
  }

  render() {
    console.log(this.props, 'dslafdskla')
    return (
      <div>
        <h2>New Blog</h2>
          <main className="container">
            <section className="newBlog">
              <h3 className="title">Post a blog</h3>
              <form onSubmit={this._handleSubmit} className="newBlogForm">
                <label htmlFor="blogTitle">Title</label>
                <input name="blogTitle" onChange={this.handleTitleChange}/>
                <label htmlFor="blogContent">Content</label>
                <textarea name="blogContent" onChange={this.handleContentChange}/>
                <input type="submit"/>
              </form>
                <span>300</span>
            </section>
          </main>
      </div>
    )
  }
};





export default BlogForm;