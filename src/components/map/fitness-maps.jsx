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
      return <GymMap closeMap={this.closeMap} jwt={this.props.jwt}/>
    } else if (this.state.currentMap === "showEventsMap") {
      return <EventMap closeMap={this.closeMap} jwt={this.props.jwt}/>
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
        <h1>Fitness Map</h1>
        <ul>
            <li className="gymMapLink" onClick={this.showGymMap}>Nearby Gym Map</li>
            <li className="eventsMapLink" onClick={this.showEventsMap}>Nearby Events Map</li>
          {this.generateMap()}
        </ul>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(Maps)



