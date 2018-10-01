import React, { Component } from 'react'
import Pic from './img-01.png'
import LoginForm from './login-form.jsx'
import RegistrationForm from './registration.jsx'



class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state= {
      currentForm: "showRegistrationForm"
    };
  }

  closeForm = (e) => {
    e.preventDefault();
    this.setState({
      currentForm: ""
    });

  }

  generateForm = () => {
    if (this.state.currentForm === "showLoginForm") {
      return (
        <div className="formContent">
          <LoginForm closeForm={this.closeForm} handleLogin={this.props.handleLogin}/>
        </div>
      )
    } else if (this.state.currentForm === "showRegistrationForm") {
      return (
        <div className="formContent">
          <RegistrationForm closeForm={this.closeForm} handleRegister={this.props.handleRegister}/>
        </div>
      )
    }
  }

  showLoginForm = (e) => {
    e.preventDefault()
    this.setState({
      currentForm: "showLoginForm"
    });
    this.generateForm();
  }

  showRegistrationForm = (e) => {
    e.preventDefault()
    this.setState({
      currentForm: "showRegistrationForm"
    });
    this.generateForm();
  }


  render() {
    return (
      <div className="landingPage">
        <div className="landingForms">
          <div className="landingHeader">YourFitnessPal</div>
            <li className="loginLink" onClick={this.showLoginForm}>Login</li>
            <li className="registrationLink" onClick={this.showRegistrationForm}>Registration</li>
            {this.generateForm()}
        </div>
      </div>
    )
  }
}

export default LandingPage;