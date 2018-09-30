// delete this, we're not using it
import React, { Component } from 'react'

const NutritionSearchbar = (props) => {
  return(

  )
}

class NutritionSearchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchBarContent: ""
    }
  }

  _handleQueryChange = e => {
    e.preventDefault();
    this.setState({searchBarContent = e.target.query.value})
  }

  render() {
    return(
      <div>
        <form>
          <textarea name="query" onChange={this._handleQueryChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}