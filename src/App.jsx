import React, { Component } from 'react';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard.jsx';
import Nutrition from './components/nutrition/nutrition-main.jsx';
import Maps from './components/map/fitness-maps.jsx';
import Blog from './components/blogs/blog-main.jsx';
import LandingPage from './components/home-page/landing-page.jsx';
import Events from './components/fitness-events/event-main.jsx';

import NavBar from './components/nav-bar/nav-bar.jsx'

import history from "./history.jsx"
import { withRouter, Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import generateUserURL from './_helper.jsx'






class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      current_user: null,
      current_user_id: 9
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
      history.push(generateUserURL(this.state.current_user_id, "dashboard"))
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
    axios.post('http://localhost:3000/api/register', data)
      .then(() => {
        console.log("register info has been posted")
      })
    this.setState({current_user: registrationObj.firstName}, function(){
      console.log(this.state.current_user)


      history.push(generateUserURL(this.state.current_user_id, "dashboard"))

    })
      console.log("hi", JSON.stringify(registrationObj))
  }


  render() {

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <LandingPage handleLogin={this._handleLogin} handleRegister={this._handleRegister} /> } />

          <Route exact path={generateUserURL(this.state.current_user_id, "dashboard")} render={() => (this.state.current_user !== null ?
                                                                (<div><NavBar id={this.state.current_user_id}/>
                                                                <Dashboard /></div>) : <Redirect to="/" />)} />

          <Route exact path={generateUserURL(this.state.current_user_id, "map")} render={() => (this.state.current_user !== null ?
                                                                (<div><NavBar id={this.state.current_user_id}/>
                                                                <Maps /></div>) : <Redirect to="/" />)} />

          <Route exact path={generateUserURL(this.state.current_user_id, "nutrition")} render={() => (this.state.current_user !== null ?
                                                                (<div><NavBar id={this.state.current_user_id}/>
                                                                <Nutrition /></div>) : <Redirect to="/" />)} />

          <Route exact path={generateUserURL(this.state.current_user_id, "blog")} render={() => (this.state.current_user !== null ?
                                                               (<div><NavBar id={this.state.current_user_id}/>
                                                                <Blog /></div>) : <Redirect to="/" />)} />



          <Route exact path="/users/1/map" render={() => (this.state.current_user !== null ?
                                                                <Maps /> : <Redirect to="/" />)} />

          <Route exact path={generateUserURL(this.state.current_user_id, "events")} render={() => (this.state.current_user !== null ?
                                                                (<div><NavBar id={this.state.current_user_id}/>
                                                                <Events /></div>) : <Redirect to="/" />)} />


          <Route exact path={generateUserURL(this.state.current_user_id, "recent")} render={() => (this.state.current_user !== null ?
                                                                (<div><NavBar id={this.state.current_user_id}/>
                                                                <Maps /></div>) : <Redirect to="/" />)} />


        </Switch>


      </Router>
    )
  }
};

export default App;
