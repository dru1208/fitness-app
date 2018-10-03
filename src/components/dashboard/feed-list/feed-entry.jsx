import React from 'react'
import axios from 'axios'

export default class FeedEntry extends React.Component {
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
        this.setState({feeds})
      })
  }

  render() {
    this.state.feeds.sort(function(a,b) {
        let dateA = new Date(a.created_at)
        let dateB = new Date(b.created_at)
        return dateA - dateB
    })
    const sortedFeeds = this.state.feeds.reverse().slice(0,5)
    return (
      <div className="dashboardFeedEntry">
        { sortedFeeds.map((entry, index) =>
          <div className="dashboardSingleEventEntry" key={index}>
             <h4>{entry.title}</h4>
             <div className="dashboardContent">{entry.content}</div>
             <a href={entry.link}>{entry.link}</a>
          </div>
        )}
      </div>
    )
  }
}