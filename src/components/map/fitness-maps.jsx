import React, { Component } from "react";
import { css } from 'emotion';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import EventsMap from "./events-map.jsx";
import GymMap from "./gym-map.jsx";
import EventMap from "./events-map.jsx";

const mapPage = css`
  padding: 0 8em;
`

export class Maps extends Component {

  render() {
    return (
      <main className={mapPage}>
        <h1>Fitness Map</h1>
        <div>
        <GymMap jwt={this.props.jwt}/>
        </div>
        <div>Nearby Events go here</div>
      </main>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(Maps)



