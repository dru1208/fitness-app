import React from 'react'
import FitnessGoal from './fitness-goal.jsx'
import GoalForm from './fitness-goal-form.jsx'
import GoalEntry from './fitness-goal-entry.jsx'
const GoalList = (props) => {
  return (
  <main className="dashboardGoalList">
    <h1 className="dashboardGoalHeader">Recent Goals</h1>
    <div className="dashboardGoalCheckbox">
      <GoalForm user_id={props.user_id} />
      <GoalEntry user_id={props.user_id} />

    </div>
  </main>
  )
}

export default GoalList;

