import React from 'react';

const LocationUpdateForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleLocationUpdate}>
        <label htmlFor="location">Location: </label>
        <input type="text" name="location" /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" /><br />
        <input className="locationSubmitButton" type="submit" value="Update Location"/>
      </form>
    </div>
  )
}

export default LocationUpdateForm;