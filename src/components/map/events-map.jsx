import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';

const latLng = (array) => {
  return {lat: array[0], lng: array[1]}
}


export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapData: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/maps')
      .then((response) => {
        const data = response.data;
        const oldMapData = this.state.mapData
        const newMapData = []
        data.forEach((location) => {
          newMapData.push(latLng(location))
        })
        this.setState( {mapData: [...newMapData, ...oldMapData]} )
      })
  }



  render() {
    const generateMapMarkers = this.state.mapData.map ((marker, index) => {
      return <Marker position={marker} key={index} />
    })

    console.log(generateMapMarkers);

    return (
      <main>
        <h2>Nearby Events:</h2>
        <Map
          google={this.props.google}
          zoom={16}
          initialCenter={{lat: 43.6446002, lng: -79.3951586}}
        >
          {generateMapMarkers}
        </Map>
      </main>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)



