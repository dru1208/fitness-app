import React, { Component } from 'react'

const LoginForm = (props) => {


  return (
    <div className="loginForm">
    <h2>Login</h2>
      <form onSubmit={props.handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email"></input><br></br>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input><br></br>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )

};


export default LoginForm;