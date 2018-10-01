import React from 'react';
import { css } from 'emotion';
import {Link} from 'react-router-dom';
import { generateUserURL } from '../../_helper.jsx';

// const NavBarStyling = css`
//   list-style: none;
//   background: #3d3d3d;
//   display: block;
//   padding: 0 1em;
//   margin: 0;
//   height: 100%;
//   float: left;
//   position: fixed;
//   z-index: 1;
// `


const NavBar = (props) => {
  return (

    <div className="navBar">
      <li><Link to={generateUserURL(props.id, "dashboard")}>
          <button className="navBarButtons">Dashboard</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "map")}>
          <button className="navBarButtons">Map</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "nutrition")}>
          <button className="navBarButtons">Nutrition</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "recent")}>
          <button className="navBarButtons">Recent</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "blog")}>
          <button className="navBarButtons">Profile</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "events")}>
          <button className="navBarButtons">Events</button>
      </Link></li>
      <li><Link to="/">
        <button className="navBarButtons" onClick={props.handleLogout}>Logout</button>
      </Link></li>
    </div>

  )
}

export default NavBar;

