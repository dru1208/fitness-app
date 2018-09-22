import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import EventsMap from "./events-map.jsx";

export class MapContainer extends Component {

  render() {
    return (
      <main>
        <h2>Nearby Gyms:</h2>
        <Map
        google={this.props.google}
        zoom={16}
        initialCenter={{lat: 43.6446002, lng: -79.3951586}}>
           <Marker title={'Current Location'} name={'Current Location'} position={{lat: 43.6446002, lng: -79.3951586}} />
          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </main>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
