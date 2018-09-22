import React, { Component } from 'react'


import LoginForm from './login.jsx'
import RegistrationForm from './registration.jsx'



const HomePage = (props) => {
  return (
    <div>
    <h2>This is landing page!</h2>
    <RegistrationForm/>
    <LoginForm/>
    </div>
  )
}

export default HomePage;