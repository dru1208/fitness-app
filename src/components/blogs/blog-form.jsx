import React, { Component } from 'react';
import axios from 'axios';

class blogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userID: this.props.userID
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.blogTitle.value !== "" && e.target.blogContent.value !== "") {
      axios.post('http://localhost:3000/api/blogs', {
        user_id: this.state.userID,
        title: e.target.blogTitle.value,
        content: e.target.blogContent.value
      }).then((response) => {
        this.props.handleNewBlog(response.data)
      })
    }
  }

  render() {
    return (
      <div>
        <h2>New Blog</h2>
          <main className="container">
            <section className="newBlog">
              <h3 className="title">Post a blog</h3>
              <form onSubmit={this._handleSubmit} className="newBlogForm">

                <label htmlFor="blogTitle">Title</label>
                <input name="blogTitle" />

                <label htmlFor="blogContent">Content</label>
                <textarea name="blogContent" />
                <input type="submit"/>
              </form>
                <span>300</span>
            </section>
          </main>
      </div>
    )
  }
}

export default blogForm;