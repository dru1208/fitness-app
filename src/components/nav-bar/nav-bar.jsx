import React from 'react';
import {Link} from 'react-router-dom';
import { generateUserURL } from '../../_helper.jsx';


const NavBar = (props) => {
  return (
    <div>
      <Link to={generateUserURL(props.id, "dashboard")}>
          <button>Dashboard</button><br />
      </Link>
      <Link to={generateUserURL(props.id, "map")}>
          <button>Map</button><br />
      </Link>
      <Link to={generateUserURL(props.id, "nutrition")}>
          <button>Nutrition</button><br />
      </Link>
      <Link to={generateUserURL(props.id, "recent")}>
          <button>Recent</button><br />
      </Link>
      <Link to={generateUserURL(props.id, "blog")}>
          <button>Blog</button><br />
      </Link>
      <Link to={generateUserURL(props.id, "events")}>
          <button>Events</button><br />
      </Link>
      <Link to="/">
        <button onClick={props.handleLogout}>Logout</button>
      </Link>
    </div>
  )
}

export default NavBar;

