import React from 'react';
import FitnessGoal from './fitness-goal.jsx';

const GoalList = (props) => {
  const generateGoals = props.data.map((entry, index) => {
    return (
      <FitnessGoal entry={entry} key={index} generateCheckBox={props.generateCheckBox} handleDeleteGoal={props.handleDeleteGoal} />
    )
  })

  return (
    <div className="dashboardGoalEntry">
    <h3>GoalList</h3>
      {generateGoals}
    </div>
  )
}

export default GoalList
