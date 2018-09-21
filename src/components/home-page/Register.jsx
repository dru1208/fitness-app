import React, { Component } from 'react'


const LoginPage = (props) => {
  return (
    <div>
    <h2>Registration Form</h2>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName"></input><br></br>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName"></input><br></br>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email"></input><br></br>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input><br></br>

        <label htmlFor="passwordConfirmation">Password Confirmation:</label>
        <input type="passwordConfirmation" name="passwordConfirmation"></input><br></br>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default LoginPage;