import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import EventsMap from "./events-map.jsx";
import axios from 'axios';

const generateLatLng = (x, y) => {
  return {lat: x, lng: y}
}

const style = {
  height: '500px',
  width: '500px',
  display: 'grid',
  position: 'none'
}


export class GymMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null,
      showingInfoWindow: false,
      selectedPlace: {}
    }
  }

  componentDidMount() {
    const options = {
      method: "GET",
      url: "http://localhost:3000/api/gym_maps",
      headers: {
        'content-type': 'application/json',
        'Authorization': this.props.jwt
      }
    }

    axios(options)
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {

    let generateMapMarkers = [];
    if (this.state.data && this.state.data.maps) {
      generateMapMarkers = this.state.data.maps.map ((marker, index) => {
        return <Marker position={marker} key={index}
                       onClick={this.onMarkerClick}
                       name={marker.name}/>
      });
    }

    let center = {lat: 0, lng: 0};
    if (this.state.data) {
      center={lat: this.state.data.centerLat, lng: this.state.data.centerLng};
    }

    return (

          <Map google={this.props.google} style={style} zoom={16} center= {center} >
          {generateMapMarkers}
            <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
              <div className="gymsMapInfo">
                <h3>{this.state.selectedPlace.name}</h3>
                <p><strong>Address: </strong>{this.state.selectedPlace.position ? this.state.selectedPlace.position.vicinity : "none"}</p>
              </div>
            </InfoWindow>
          </Map>

    );
  }

}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY),
  libraries: ['places']
})(GymMap)