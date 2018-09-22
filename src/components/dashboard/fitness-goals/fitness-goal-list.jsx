import React from 'react'
import FitnessGoal from './fitness-goal.jsx'

const FitnessGoals = (props) => {

  const generateFitnessGoalList = props.fitnessGoals.map((goal, index) => {
      return <FitnessGoal goal={goal} key={index} />
  })

  return (
    <div>
      <h2>Your Current Fitness Goals:</h2>
      <div className="fitness-goals">
        {generateFitnessGoalList}
      </div>
    </div>
  )
}

export default FitnessGoals