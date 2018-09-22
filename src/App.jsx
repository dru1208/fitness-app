import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard.jsx';
import Nutrition from './components/nutrition/nutrition-page.jsx';
import Maps from './components/map/fitness-maps.jsx';
import Blog from './components/blogs/blog-main.jsx';
import LandingPage from './components/home-page/landing-page.jsx';
import Events from './components/fitness-events/event-new.jsx';

import history from "./history.jsx"
import { withRouter, Router, Route, Link, Redirect, Switch } from 'react-router-dom';




class App extends Component {


  constructor (props) {
    super(props)
    this.state = {
      current_user: null
    }
  }

  _handleLogin = (e) => {
    e.preventDefault();
    console.log("hello you've logged in")
    const loginObj = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    this.setState({current_user: "andrew"}, function() {
      console.log(this.state.current_user)
      history.push("/users/1/dashboard")
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
    this.setState({current_user: registrationObj.firstName}, function(){
      console.log(this.state.current_user)
<<<<<<< HEAD
       history.push("/users/1/dashboard")
=======
      history.push("/users/1/dashboard")
>>>>>>> andrew-lexy-frontend
    })
      console.log("hi", JSON.stringify(registrationObj))
  }

  render() {

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <LandingPage handleLogin={this._handleLogin} handleRegister={this._handleRegister} /> } />

          <Route exact path="/users/1/dashboard" render={() => (this.state.current_user !== null ?
                                                                <Dashboard /> : <Redirect to="/" />)} />

<<<<<<< HEAD
=======
          <Route exact path="/users/1/map" render={() => (this.state.current_user !== null ?
                                                                <Maps /> : <Redirect to="/" />)} />

          <Route exact path="/users/1/nutrition" render={() => (this.state.current_user !== null ?
                                                                <Nutrition /> : <Redirect to="/" />)} />
          <Route exact path="/users/1/blog" render={() => (this.state.current_user !== null ?
                                                                <Blog /> : <Redirect to="/" />)} />
          <Route exact path="/users/1/events" render={() => (this.state.current_user !== null ?
                                                                <Events /> : <Redirect to="/" />)} />
          <Route exact path="/users/1/recent" render={() => (this.state.current_user !== null ?
                                                                <Maps /> : <Redirect to="/" />)} />
>>>>>>> andrew-lexy-frontend

        </Switch>


      </Router>
    )
  }
};

export default App;
