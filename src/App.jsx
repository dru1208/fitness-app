import React, { Component } from 'react';
import axios from 'axios'
import jwt_decode from 'jwt-decode'

import logo from './logo.svg';
import './App.css';
import LandingPage from './components/home-page/landing-page.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Maps from './components/map/fitness-maps.jsx';
import Nutrition from './components/nutrition/nutrition-main.jsx';
import Recent from './components/recent/recent-main.jsx';
import Blog from './components/blogs/blog-main.jsx';
import Events from './components/fitness-events/event-main.jsx';

import NavBar from './components/nav-bar/nav-bar.jsx'

import history from "./history.jsx"
import { withRouter, Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import generateUserURL from './_helper.jsx'






class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userLoggedIn: false,
      currentUser: null,
      userID: null,
      jwt: null
    }
  }

  _handleLogin = (e) => {
    e.preventDefault();
    console.log("hello you've logged in")
    const loginObj = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    const data = JSON.stringify(loginObj)
    const options = {
      method: "POST",
      headers: {'content-type': 'application/json'},
      data: data,
      url: 'http://localhost:3000/api/login'
    }
    axios(options)
      .then((response) => {
        if (response.data) {
          const userInfo = jwt_decode(response.data)
          this.setState({
            userLoggedIn: true,
            currentUser: userInfo.firstName,
            userID: userInfo.userID,
            jwt: response.data
          })
          history.push(generateUserURL(this.state.currentUser_id, "dashboard"))
        }
      })
  }

  _handleRegister = (e) => {
    e.preventDefault();
    console.log("hello you've registered in")
    const registrationObj = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      passwordConfirmation: e.target.passwordConfirmation.value,
      location: e.target.location.value
    }
    const data = JSON.stringify(registrationObj)
    const options = {
      method: "POST",
      headers: {'content-type': 'application/json'},
      data: data,
      url: 'http://localhost:3000/api/register'
    }
    axios(options)
      .then((response) => {
        if (response.data) {
          const userInfo = jwt_decode(response.data)
          this.setState({
            userLoggedIn: true,
            currentUser: userInfo.firstName,
            userID: userInfo.userID,
            jwt: response.data
          })
          history.push(generateUserURL(this.state.currentUser_id, "dashboard"))
        }
      })
  }

  _handleLogout = (e) => {
    this.setState({
      userLoggedIn: false,
      currentUser: null,
      user_id: null,
      jwt: null
    })
  }


  render() {

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <LandingPage handleLogin={this._handleLogin} handleRegister={this._handleRegister} /> } />

          <Route exact path={generateUserURL(this.state.currentUser_id, "dashboard")} render={() => (this.state.userLoggedIn ?
                                                                (<div><NavBar handleLogout={this._handleLogout} id={this.state.currentUser_id}/>
                                                                <Dashboard /></div>) : <Redirect to="/" />)} />

          <Route exact path={generateUserURL(this.state.currentUser_id, "map")} render={() => (this.state.userLoggedIn ?
                                                                (<div><NavBar handleLogout={this._handleLogout} id={this.state.currentUser_id}/>
                                                                <Maps /></div>) : <Redirect to="/" />)} />

          <Route exact path={generateUserURL(this.state.currentUser_id, "nutrition")} render={() => (this.state.userLoggedIn ?
                                                                (<div><NavBar handleLogout={this._handleLogout} id={this.state.currentUser_id}/>
                                                                <Nutrition /></div>) : <Redirect to="/" />)} />

          <Route exact path={generateUserURL(this.state.currentUser_id, "blog")} render={() => (this.state.userLoggedIn ?
                                                               (<div><NavBar handleLogout={this._handleLogout} id={this.state.currentUser_id}/>
                                                                <Blog /></div>) : <Redirect to="/" />)} />


          <Route exact path="/users/1/map" render={() => (this.state.userLoggedIn ?
                                                                <Maps /> : <Redirect to="/" />)} />

          <Route exact path={generateUserURL(this.state.currentUser_id, "events")} render={() => (this.state.userLoggedIn ?
                                                                (<div><NavBar handleLogout={this._handleLogout} id={this.state.currentUser_id}/>
                                                                <Events /></div>) : <Redirect to="/" />)} />

          <Route exact path={generateUserURL(this.state.currentUser_id, "recent")} render={() => (this.state.userLoggedIn ?
                                                                (<div><NavBar handleLogout={this._handleLogout} id={this.state.currentUser_id}/>
                                                                <Recent /></div>) : <Redirect to="/" />)} />



        </Switch>


      </Router>
    )
  }
};

export default App;
