import React from 'react'
import FitnessGoal from './fitness-goal.jsx'
import GoalForm from './fitness-goal-form.jsx'
import GoalEntry from './fitness-goal-entry.jsx'
const GoalList = (props) => {

  return (
  <main className="Your Current Fitness Goals:">
    <h1>Recent Goals</h1>
      <GoalEntry />
      <GoalForm />
  </main>
  )
}

export default GoalList;

