import React, { Component } from 'react'



class RegistrationForm extends Component {

  _handleSubmit = (e) => {
    e.preventDefault();
      const registrationObj = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        passwordConfirmation: e.target.passwordConfirmation.value,
      }
      console.log("hi", JSON.stringify(registrationObj))
  }

  render(){
    return (
    <div>
    <h2>Registration Form</h2>
      <form onSubmit={this._handleSubmit}>
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

        <input type="submit" value="Submit"></input>
      </form>
    </div>
    )
  }
};


export default RegistrationForm;