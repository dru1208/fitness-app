import React, { Component } from 'react'

class LoginForm extends Component {
  _handleSubmit = (e) => {
    e.preventDefault();
      const loginObj = {
        email: e.target.email.value,
        password: e.target.password.value
      }
      console.log("hi")
      console.log("hi", JSON.stringify(loginObj))
  }


  render(){
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email"></input><br></br>

          <label htmlFor="password">Password:</label>
          <input type="password" name="password"></input><br></br>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
};


export default LoginForm;