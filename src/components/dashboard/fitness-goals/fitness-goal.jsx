import React from 'react'


const FitnessGoal = (props) =>{
  return (
    <div className="single-goal">
      <span>{props.entry.description} | {props.entry.datetime.split('T')[0]}</span>
        {props.generateCheckBox(props.entry)}
      <button value={props.entry.id} onClick={props.handleDeleteGoal}>Delete</button>
    </div>
  )
}


export default FitnessGoal