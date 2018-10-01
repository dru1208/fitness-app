import React from 'react';
import {Link} from 'react-router-dom';
import { generateUserURL } from '../../_helper.jsx';
import { push as Menu } from "react-burger-menu";



export default props => {
  return (
    <Menu {... props} className="navBar">
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

