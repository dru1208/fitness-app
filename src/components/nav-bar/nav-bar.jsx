import React from 'react';
import history from '../../history.jsx'
import { withRouter, Router, Route, Link, Redirect, Switch } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
    <Link to="/users/1/dashboard">
        <button>Dashboard</button>
    </Link>
    <Link to="/users/1/map">
        <button>Map</button>
    </Link>
    <Link to="/users/1/nutrition">
        <button>Nutrition</button>
    </Link>
    <Link to="/users/1/recent">
        <button>Recent</button>
    </Link>
    <Link to="/users/1/blog">
        <button>Blog</button>
    </Link>
    <Link to="/users/1/events">
        <button>Events</button>
    </Link>
    </div>
  )
}

export default NavBar;

