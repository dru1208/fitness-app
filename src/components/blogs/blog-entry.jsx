import React from 'react'
import axios from 'axios'

export default class BlogEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/blogs')
      .then((response) => {
        const data = response.data;
        this.setState({data})
      })
  }

  render() {
    return (
      <div>
      { this.state.data.map(entries =>
        <article className="container">
          <header>
            <h3>{entries.title}</h3>
          </header>
            <p>{entries.content}</p>
          <footer>
            <div>icon like here</div>
            <input type="submit" value="Delete"/>
          </footer>
        </article>
      )}
      </div>
    )
  }
}