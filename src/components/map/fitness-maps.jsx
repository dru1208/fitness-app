import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Location from "./location.jsx"
import GymMap from "./gym-map.jsx";
import EventMap from "./events-map.jsx";


export class Maps extends Component {

  constructor(props) {
    super(props);

    this.state= {
      currentMap: "showGymMap",
      location: this.props.location
    };
  }


  closeMap = (e) => {
    e.preventDefault();
    this.setState({
      currentMap: ""
    });

  }

  generateMap = () => {
    if (this.state.currentMap === "showGymMap") {
      return (
        <div className="mapContent">
          <GymMap closeMap={this.closeMap} jwt={this.props.jwt} location={this.state.location} />
        </div>
      )
    } else if (this.state.currentMap === "showEventsMap") {
      return (
        <div className="mapContent">
          <EventMap closeMap={this.closeMap} jwt={this.props.jwt} location={this.state.location} />
        </div>
      )
    }
  }


  showGymMap = (e) => {
    e.preventDefault()
    this.setState({
      currentMap: "showGymMap",

    });
    this.generateMap();
  }

  showEventsMap = (e) => {
    e.preventDefault()
    this.setState({
      currentMap: "showEventsMap"

    });
    this.generateMap();
  }




  render() {
    let gymMapClass = this.state.currentMap === "showGymMap" ? "gymMapLink active" : "gymMapLink";
    let eventsMapClass = this.state.currentMap === "showEventsMap" ? "eventsMapLink active" : "eventsMapLink";

    return (
      <div className="mapPage">
        <h2 className="mapHeader">Fitness Map</h2>
        <Location location={this.props.location} handleLocationUpdate={this.props.handleLocationUpdate}/>
        <ul className="mapLinks">
          <li className={gymMapClass} onClick={this.showGymMap} >Nearby Gym Map</li>
          <li className={eventsMapClass} onClick={this.showEventsMap}>Nearby Events Map</li>
        </ul>
        {this.generateMap()}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(Maps)



