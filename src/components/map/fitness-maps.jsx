import React, { Component } from "react";
import { css } from 'emotion';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import EventsMap from "./events-map.jsx";
import GymMap from "./gym-map.jsx";
import EventMap from "./events-map.jsx";


export class Maps extends Component {

  constructor(props) {
    super(props);

    this.state= {
      currentMap: "showGymMap"
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
          <GymMap closeMap={this.closeMap} jwt={this.props.jwt}/>
        </div>
      )
    } else if (this.state.currentMap === "showEventsMap") {
      return (
        <div className="mapContent">
          <EventMap closeMap={this.closeMap} jwt={this.props.jwt}/>
        </div>
      )
    }
  }


  showGymMap = (e) => {
    e.preventDefault()
    this.setState({
      currentMap: "showGymMap"
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

    return (
      <div className="mapPage">
        <h1 className="mapHeader">Fitness Map</h1>
        <ul className="mapLinks">
            <li className="gymMapLink" onClick={this.showGymMap}>Nearby Gym Map</li>
            <li className="eventsMapLink" onClick={this.showEventsMap}>Nearby Events Map</li>
        </ul>
          {this.generateMap()}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(Maps)



