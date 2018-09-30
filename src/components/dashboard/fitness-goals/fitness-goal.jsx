import React, { Component } from 'react'

// change defaultChecked to a handler that changes the completed value in database

//not currently being used
class FitnessGoal extends Component {

  generateCheckBox = () => {
    if (this.props.goal.completed === false) {
      return <input type="checkbox" value="completed"/>
    } else {
      return <input type="checkbox" value="completed" defaultChecked/>
    }
  }

  render() {
    return (
      <div >
        <span>{this.props.goal.description}</span>
        {this.generateCheckBox()}
      </div>
    )
  }
}

export default FitnessGoal