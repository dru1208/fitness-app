import React, { Component } from 'react';
import axios from 'axios';

class blogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userID: this.props.userID,
      letterCount: 300


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
        console.log(e.target.blogContent.value)
    }
  }

  _handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "blogContent") {
      let remaining = e.target.value.length;
      this.setState({
        letterCount: 300 - remaining
      });
    }
  }



  render() {
    return (
      <div className="blogForm border">
        <h3>New Blog</h3>
          <main className="container">
            <section className="newBlog">
              <form onChange={this._handleChange} onSubmit={this._handleSubmit} className="newBlogForm">
                <label htmlFor="blogTitle">Title</label>
                <input name="blogTitle" type="text"/>
                <label htmlFor="blogContent">Content</label>
                <textarea name="blogContent" />
                <span className="blogCounter">{this.state.letterCount}</span>
                <input type="submit" value="Post Blog"/>
              </form>
            </section>
          </main>
      </div>
    )
  }
}

export default blogForm;