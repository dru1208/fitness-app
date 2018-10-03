import React, { Component } from 'react'
import LocationUpdateForm from './location-update.form.jsx'

const Location = (props) => {
  return(
    <div className="locationSettings">
      <h4>Current Location: {props.location}</h4>
      <LocationUpdateForm handleLocationUpdate={props.handleLocationUpdate} />
    </div>
  )
}

export default Location;