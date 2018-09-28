import React from 'react'
import axios from 'axios'

export default class BlogEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      userID: this.props.userID
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/blogs', {params: {user_id: this.state.userID}})
      .then((response) => {
        const data = response.data;
        data.reverse();
        this.setState({data})
      })
  }

  render() {
    console.log(this.state.user_id, 'uiwquiwhq')
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
          </footer>
        </article>
      )}
      </div>
    )
  }
}