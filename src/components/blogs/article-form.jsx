import React, { Component } from 'react';
import axios from 'axios';

class articleForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userID: this.props.userID
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.articleTitle.value !== "" && e.target.articleLink.value !== "") {
      axios.post('http://localhost:3000/api/articles', {
        user_id: this.state.userID,
        title: e.target.articleTitle.value,
        link: e.target.articleLink.value
      }).then((response) => {
          this.props.handleNewArticle(response.data)
      })
    }
  }

  render() {
    return (
      <div className="articleForm">
        <h2>New article</h2>
          <main className="container">
            <section className="newarticle">
              <form onSubmit={this._handleSubmit} className="newArticleForm">

                <label htmlFor="articleTitle">Title</label>
                <input name="articleTitle" />

                <label htmlFor="articleLink">Link</label>
                <textarea name="articleLink" />
                <input type="submit" value="Post Article"/>
              </form>
                <span>300</span>
            </section>
          </main>
      </div>
    )
  }
};





export default articleForm;