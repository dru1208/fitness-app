import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import EventsMap from "./events-map.jsx";
import GymMap from "./gym-map.jsx";

export class MapContainer extends Component {

  render() {
    return (
      <main>
        <h1>Fitness Map</h1>
        <div>
        <GymMap />
        </div>
        <div>Nearby Events go here</div>
      </main>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)



