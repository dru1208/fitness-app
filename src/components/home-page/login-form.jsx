import React from 'react'

const LoginForm = (props) => {


  return (
    <div className="loginForm">
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