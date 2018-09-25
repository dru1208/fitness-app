import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import EventsMap from "./events-map.jsx";
import MapEntry from "./map-entry.jsx";
import axios from 'axios';

const generateLatLng = (x, y) => {
  return {lat: x, lng: y}
}

export class MapContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],

    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/gym_maps')
      .then((response) => {
        const data = response.data;
         console.log("data is", data[0].lat);
        this.setState({data})
      })

  }

  render() {
   const generateMapMarkers = this.state.data.map ((marker, index) => {
     return <Marker position={marker} key={index} />
   })

    return (
      <main>
        <h2>Nearby Gyms:</h2>
        <div>
        <Map
        google={this.props.google}
        zoom={16}
        initialCenter={ {lat: 43.6446002, lng: -79.3951586} }>
        {generateMapMarkers}
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
        </div>
      </main>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY),
  libraries: ['places']
})(MapContainer)

