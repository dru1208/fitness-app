import React from 'react';
import {Link} from 'react-router-dom';
import { generateUserURL } from '../../_helper.jsx';
import { push as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default props => {
  return (
    <Menu {... props} className="navBar">
      <li><Link to={generateUserURL(props.id, "dashboard")}>
          <button className="navBarButtons"><FontAwesomeIcon className="icons" icon="home" /> Dashboard</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "map")}>
          <button className="navBarButtons"><FontAwesomeIcon className="icons" icon="map-marked-alt" /> Map</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "nutrition")}>
          <button className="navBarButtons"><FontAwesomeIcon className="icons" icon="utensils" /> Nutrition</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "recent")}>
          <button className="navBarButtons"><FontAwesomeIcon className="icons" icon="file-alt" /> Recent</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "blog")}>
          <button className="navBarButtons"><FontAwesomeIcon className="icons" icon="user" /> Profile</button>
      </Link></li>
      <li><Link to={generateUserURL(props.id, "events")}>
          <button className="navBarButtons"><FontAwesomeIcon className="icons" icon="calendar-alt" /> Events</button>
      </Link></li>
      <li><Link to="/">
        <button className="navBarButtons" onClick={props.handleLogout}><FontAwesomeIcon icon="sign-out-alt" /> Logout</button>
      </Link></li>
    </Menu>
  );
};




// const NavBar = (props) => {
//   return (

//     <div className="navBar">
//       <li><Link to={generateUserURL(props.id, "dashboard")}>
//           <button className="navBarButtons">Dashboard</button>
//       </Link></li>
//       <li><Link to={generateUserURL(props.id, "map")}>
//           <button className="navBarButtons">Map</button>
//       </Link></li>
//       <li><Link to={generateUserURL(props.id, "nutrition")}>
//           <button className="navBarButtons">Nutrition</button>
//       </Link></li>
//       <li><Link to={generateUserURL(props.id, "recent")}>
//           <button className="navBarButtons">Recent</button>
//       </Link></li>
//       <li><Link to={generateUserURL(props.id, "blog")}>
//           <button className="navBarButtons">Profile</button>
//       </Link></li>
//       <li><Link to={generateUserURL(props.id, "events")}>
//           <button className="navBarButtons">Events</button>
//       </Link></li>
//       <li><Link to="/">
//         <button className="navBarButtons" onClick={props.handleLogout}>Logout</button>
//       </Link></li>
//     </div>

//   )
// }

// export default NavBar;

