import React from 'react';
import {Link} from 'react-router-dom';
import { generateUserURL } from '../../_helper.jsx';


const NavBar = (props) => {
  return (
    <div>
      <Link to={generateUserURL(props.id, "dashboard")}>
          <button>Dashboard</button>
      </Link>
      <Link to={generateUserURL(props.id, "map")}>
          <button>Map</button>
      </Link>
      <Link to={generateUserURL(props.id, "nutrition")}>
          <button>Nutrition</button>
      </Link>
      <Link to={generateUserURL(props.id, "recent")}>
          <button>Recent</button>
      </Link>
      <Link to={generateUserURL(props.id, "blog")}>
          <button>Blog</button>
      </Link>
      <Link to={generateUserURL(props.id, "events")}>
          <button>Events</button>
      </Link>
      <button onClick={props.handleLogout}>Logout</button>
    </div>
  )
}

export default NavBar;

