import React from 'react';
import { css } from 'emotion';
import {Link} from 'react-router-dom';
import { generateUserURL } from '../../_helper.jsx';

const NavBarStyling = css`
  list-style: none;
  background: #3d3d3d;
  display: block;
  padding: 0 1em;
  margin: 0;
  height: 100%;
  float: left;
  position: fixed;
  z-index: 1;
`


const NavBar = (props) => {
  return (
    <div className={NavBarStyling}>
      <li><Link to={generateUserURL(props.id, "dashboard")}>
          <button>Dashboard</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "map")}>
          <button>Map</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "nutrition")}>
          <button>Nutrition</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "recent")}>
          <button>Recent</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "blog")}>
          <button>Blog</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "events")}>
          <button>Events</button>
      </Link></li>
      <li><Link to="/">
        <button onClick={props.handleLogout}>Logout</button>
      </Link></li>
    </div>

  )
}

export default NavBar;

