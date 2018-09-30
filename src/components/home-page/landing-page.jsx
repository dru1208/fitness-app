import React, { Component } from 'react'


import LoginForm from './login-form.jsx'
import RegistrationForm from './registration.jsx'



const LandingPage = (props) => {
    return (
      <div className="landingPage">
        <h2>YourFitnessPal</h2>
        <LoginForm handleLogin={props.handleLogin}/>
        <RegistrationForm handleRegister={props.handleRegister}/>
      </div>
    )
}

export default LandingPage;