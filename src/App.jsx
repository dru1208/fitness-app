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
import BlogMain from './components/blogs/blog-main.jsx';
import EventMain from './components/fitness-events/event-main.jsx';
import NavBar from './components/nav-bar/nav-bar.jsx'
import history from "./history.jsx"
import { withRouter, Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import { generateUserURL } from './_helper.jsx'
import { injectGlobal } from 'emotion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMapMarkedAlt, faUtensils, faFileAlt, faUser, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


library.add(faHome, faMapMarkedAlt, faUtensils, faFileAlt, faUser, faCalendarAlt, faSignOutAlt)

injectGlobal`
  * {
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
`


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      currentUser: null,
      userID: null,
      location: "",
      jwt: null
    }
  }

  _handleLogin = (e) => {
    e.preventDefault();
    const loginObj = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    const options = {
      method: "POST",
      headers: {'content-type': 'application/json'},
      data: loginObj,
      url: 'http://localhost:3000/api/login'
    }
    axios(options)
      .then((response) => {
        if (response.data) {
          const userInfo = jwt_decode(response.data)
          this.setState({
            currentUser: userInfo.firstName,
            userID: userInfo.userID,
            location: userInfo.location,
            jwt: response.data
          }, () => {
            history.push(generateUserURL(this.state.userID, "dashboard"))
          })
        }
      })
  }

  _handleRegister = (e) => {
    e.preventDefault();
    const registrationObj = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      passwordConfirmation: e.target.passwordConfirmation.value,
      location: e.target.location.value
    }
    const options = {
      method: "POST",
      headers: {'content-type': 'application/json'},
      data: registrationObj,
      url: 'http://localhost:3000/api/register'
    }
    axios(options)
      .then((response) => {
        if (response.data) {
          const userInfo = jwt_decode(response.data)
          this.setState({
            currentUser: userInfo.firstName,
            userID: userInfo.userID,
            location: userInfo.location,
            jwt: response.data
          }, () => {
            history.push(generateUserURL(this.state.userID, "dashboard"))
          })
        }
      })
  }

  _handleLogout = (e) => {
    this.setState({
      currentUser: null,
      userID: null,
      jwt: null
    })
  }

  _handleLocationUpdate = (e) => {
    e.preventDefault();
      axios.patch('http://localhost:3000/api/users/' + this.state.userID, {
        id: this.state.userID,
        location: e.target.location.value,
        password: e.target.password.value
      }).then(response => {
        this.setState({location: response.data.location})
      })
  }

// do i need the user ID for navbar?? think some more
  render() {

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <LandingPage handleLogin={this._handleLogin} handleRegister={this._handleRegister} /> } />

          <Route exact path={generateUserURL(this.state.userID, "dashboard")}
            render={() => (this.state.currentUser ?
              (<div id="App" className="pageLayout">
                <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} handleLogout={this._handleLogout} id={this.state.userID} />
                <div id="page-wrap">
                  <Dashboard name={this.state.currentUser} userID={this.state.userID}/>
                </div>
              </div>) :
              <Redirect to="/" />
            )}
          />

          <Route exact path={generateUserURL(this.state.userID, "map")}
            render={() => (this.state.currentUser ?
              (<div id="App" className="pageLayout">
                <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} handleLogout={this._handleLogout} id={this.state.userID}/>
                <div id="page-wrap">
                  <Maps jwt={this.state.jwt} location={this.state.location} handleLocationUpdate={this._handleLocationUpdate} />
                </div>
              </div>) :
              <Redirect to="/" />
            )}
          />

          <Route exact path={generateUserURL(this.state.userID, "nutrition")}
            render={() => (this.state.currentUser ?
              (<div id="App" className="pageLayout">
                <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} handleLogout={this._handleLogout} id={this.state.userID}/>
                <div id="page-wrap">
                  <Nutrition userID={this.state.userID} name={this.state.currentUser} id={this.state.userID} jwt={this.state.jwt}/>
                </div>
              </div>) :
              <Redirect to="/" />
            )}
          />

          <Route exact path={generateUserURL(this.state.userID, "blog")}
            render={() => (this.state.currentUser ?
              (<div id="App" className="pageLayout">
                <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} handleLogout={this._handleLogout} id={this.state.userID}/>
                <div id="page-wrap">
                  <BlogMain name={this.state.currentUser} userID={this.state.userID}/>
                </div>
              </div>) :
              <Redirect to="/" />
            )}
          />


          <Route exact path={generateUserURL(this.state.userID, "events")}
            render={() => (this.state.currentUser ?
              (<div id="App" className="pageLayout">
                <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} handleLogout={this._handleLogout} id={this.state.userID}/>
                <div id="page-wrap">
                  <EventMain userID={this.state.userID} />
                </div>
              </div>) :
              <Redirect to="/" />
            )}
          />

          <Route exact path={generateUserURL(this.state.userID, "recent")}
            render={() => (this.state.currentUser ?
              (<div id="App" className="pageLayout">
                <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} handleLogout={this._handleLogout} id={this.state.userID}/>
                <div id="page-wrap">
                  <Recent />
                </div>
              </div>) :
              <Redirect to="/" />
            )}
          />



        </Switch>


      </Router>
    )
  }
};

export default App;
