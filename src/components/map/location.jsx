import React, { Component } from 'react'
import LocationUpdateForm from './location-update.form.jsx'

const Location = (props) => {
  return(
    <div className="locationForm">
      <h3>Current Location: {props.location}</h3>
      <LocationUpdateForm handleLocationUpdate={props.handleLocationUpdate} />
    </div>
  )
}

export default Location;