import React, { Component } from 'react'


const RegistrationPage = (props) => {
  return (
    <div>
      <form>
        <label for="firstName">First Name:</label>
        <input type="text" name="firstName"></input><br></br>

        <label for="lastName">Last Name:</label>
        <input type="text" name="lastName"></input><br></br>

        <label for="email">Email:</label>
        <input type="email" name="email"></input><br></br>

        <label for="password">Password:</label>
        <input type="password" name="password"></input><br></br>

        <label for="passwordConfirmation">Password Confirmation:</label>
        <input type="passwordConfirmation" name="passwordConfirmation"></input><br></br>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default RegistrationPage