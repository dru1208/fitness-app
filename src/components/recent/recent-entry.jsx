import React from 'react'
import axios from 'axios'

export default class BlogEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogData: [],
      articleData: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/blogs')
      .then((response) => {
        const blogData = response.data;
        this.setState({blogData})
      })
    axios.get('http://localhost:3000/api/articles')
      .then((response) => {
        const articleData = response.data;
        this.setState({articleData})
      })
  }

  render() {
    return (
      <div>
      { this.state.blogData.map(entries =>
        <article className="container">
          <header>
            <h3>{entries.title}</h3>
          </header>
            <p>{entries.content}</p>
          <footer>
            <div>icon like here</div>
          </footer>
        </article>
      )}
      { this.state.articleData.map(entries =>
        <article className="container">
          <header>
            <h3>{entries.title}</h3>
          </header>
            <p>{entries.link}</p>
          <footer>
            <div>icon like here</div>
          </footer>
        </article>
      )}
      </div>
    )
  }
}


