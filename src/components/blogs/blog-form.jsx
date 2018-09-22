import React, { Component } from 'react';

class BlogForm extends Component {

  _handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.blogCategory.value !== "Make a choice:") {
      const blogObj = {
        content: e.target.blogContent.value,
        category: e.target.blogCategory.value
      }
      console.log("hi")
      console.log("hi", JSON.stringify(blogObj))
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
                <select name="blogCategory">
                  <option>Make a choice:</option>
                  <option>Cardio</option>
                  <option>Weight-lifting</option>
                  <option>Nutrition</option>
                  <option>Other</option>
                </select>
                <textarea name="blogContent"/>
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