import React from 'react';

const LocationUpdateForm = (props) => {
  return (
    <div>
      <form className="locationForm" onSubmit={props.handleLocationUpdate}>
        <label className="locationLabel" htmlFor="location">Location: </label>
        <input className="location" type="text" name="location" />
        <label className="locationPasswordLabel" htmlFor="password">Password: </label>
        <input className="locationPassword" type="password" name="password" />
        <input className="locationSubmitButton" type="submit" value="Update Location"/>
      </form>
    </div>
  )
}

export default LocationUpdateForm;