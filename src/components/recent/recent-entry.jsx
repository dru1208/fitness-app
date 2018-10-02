import React from 'react'
import axios from 'axios'
import { css } from 'emotion'





export default class BlogEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feeds: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/feeds')
      .then((response) => {
        const feeds = response.data;
        this.setState({feeds: feeds})
      })
  }

  render() {

    this.state.feeds.sort(function(a,b) {
        let dateA = new Date(a.created_at)
        let dateB = new Date(b.created_at)
        return dateA - dateB
    })
    const sortedFeeds = this.state.feeds.reverse()

    return (
      <div className="feedEntryWrapper">
      { sortedFeeds.map(entries =>
        <div className="feedEntry border">
          <header>
            <h3>{entries.title}</h3>
          </header>
          <p>{entries.content}</p>
          <p>{entries.link}</p>
        </div>
      )}
      </div>
    )
  }
}


