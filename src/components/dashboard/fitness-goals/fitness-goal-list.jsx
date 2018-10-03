import React from 'react';
import FitnessGoal from './fitness-goal.jsx';

const GoalList = (props) => {
  const generateGoals = () => {
    if (props.data.length > 0) {
      const list =  props.data.map((entry, index) => {
        return (
          <FitnessGoal entry={entry} key={index} generateCheckBox={props.generateCheckBox} handleDeleteGoal={props.handleDeleteGoal} />
        )
      })
      return list
    } else {
      return (<h4>Let's get some goals going!</h4>)
    }
  }


  return (
    <div className="dashboardGoalEntry">
    <h3>GoalList</h3>
      {generateGoals()}
    </div>
  )
}

export default GoalList
