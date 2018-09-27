import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import EventsMap from "./events-map.jsx";
import axios from 'axios';

const generateLatLng = (x, y) => {
  return {lat: x, lng: y}
}

export class GymMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      showingInfoWindow: false,
      selectedPlace: {},


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
        console.log('this is our response')
        console.log(response.data)
    })

  }

    // axios.get('http://localhost:3000/api/gym_maps')
    //   .then((response) => {
    //     const data = response.data;
    //      console.log("data is", data);
    //     this.setState({data})
    //   })

  // }


  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
   const generateMapMarkers = this.state.data.map ((marker, index) => {
     return <Marker position={marker} key={index}
                    onClick={this.onMarkerClick}
                    name={marker.name}


             />
   })
   console.log("this.state.selectedPlace", this.state.selectedPlace);
    console.log("this.state.selectedPlace.position", this.state.selectedPlace.position);
     console.log("type of this.state.selectedPlace.position", typeof(this.state.selectedPlace.position));


    return (
      <main>
        <h2>Nearby Gyms:</h2>
        <div>
        <Map
        google={this.props.google}
        zoom={16}
        initialCenter={ {lat: 43.6446002, lng: -79.3951586} }>
        {generateMapMarkers}
          <InfoWindow onClose={this.onInfoWindowClose}
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}
          >
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
              <p>{this.state.selectedPlace.position ? this.state.selectedPlace.position.vicinity : "none"}</p>
            </div>
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
})(GymMap)

