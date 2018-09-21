import React, { Component } from 'react'


const LoginPage = (props) => {
  return (
    <div>
    <h2>Login Form</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email"></input><br></br>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input><br></br>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default LoginPage;