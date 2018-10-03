import React, { Component } from 'react'
import Pic from './img-01.png'
import LoginForm from './login-form.jsx'
import RegistrationForm from './registration.jsx'
import LandingIconPic from './image.png'


class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state= {
      currentForm: "showLoginForm"
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
          <LoginForm className="loginForm" closeForm={this.closeForm} handleLogin={this.props.handleLogin}/>
        </div>
      )
    } else if (this.state.currentForm === "showRegistrationForm") {
      return (
        <div className="formContent">
          <RegistrationForm className="registrationForm" closeForm={this.closeForm} handleRegister={this.props.handleRegister} selectImageHandler={this.props.selectImageHandler} image={this.props.image}/>
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

    let loginFormClass = this.state.currentForm === "showLoginForm" ? "loginLink activeForm" : "loginLink";
    let registrationFormClass = this.state.currentForm === "showRegistrationForm" ? "registrationLink activeForm" : "registrationLink";
    return (
      <div className="landingPage">
        <div className="landingForms">
          <h2 className="landingHeader">YourFitnessPal</h2>
          <div className="loginRegisterForm">
            <li className={loginFormClass} onClick={this.showLoginForm}>Login</li>
            <li className={registrationFormClass} onClick={this.showRegistrationForm}>Registration</li>
            {this.generateForm()}
          </div>
            <img className="landingIconPic" src={LandingIconPic} alt="IMG"></img>
        </div>
      </div>
    )
  }
}

export default LandingPage;