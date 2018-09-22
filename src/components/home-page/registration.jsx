import React, { Component } from 'react'



const RegistrationForm = (props) => {


  return (
    <div>
    <h2>Registration Form</h2>
      <form onSubmit={props.handleRegister}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName"></input><br></br>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName"></input><br></br>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email"></input><br></br>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input><br></br>

        <label htmlFor="passwordConfirmation">Password Confirmation:</label>
        <input type="password" name="passwordConfirmation"></input><br></br>

        <label htmlFor="location">Location:</label>
        <input type="text" name="location"></input><br></br>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
};


export default RegistrationForm;