import React, { Component } from 'react';
import axios from 'axios';

class articleForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      title: "",
      link: "",
      userID: this.props.userID
    }
  }

  handleTitleChange = (e) => {
    this.setState( {title: e.target.value} )
    console.log('setting state title', this.state.title)
  }

  handleLinkChange = (e) => {
    this.setState( {link: e.target.value} )
    console.log('setting state content', this.state.link)
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    let title = this.state.title
    let link = this.state.link
    let userID = this.state.userID
    axios.post('http://localhost:3000/api/articles', {
      user_id: userID,
      title: title,
      link: link
    }).then((response) => {
        console.log(response)
      })
  }

  render() {
    return (
      <div>
        <h2>New article</h2>
          <main className="container">
            <section className="newarticle">
              <h3 className="title">Post a article</h3>
              <form onSubmit={this._handleSubmit} className="newArticleForm">
                <label htmlFor="articleTitle">Title</label>
                <input name="articleTitle" onChange={this.handleTitleChange}/>
                <label htmlFor="articleLink">Link</label>
                <textarea name="articleLink" onChange={this.handleLinkChange}/>
                <input type="submit"/>
              </form>
                <span>300</span>
            </section>
          </main>
      </div>
    )
  }
};





export default articleForm;