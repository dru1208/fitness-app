import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';


const generateLatLng = (x, y) => {
  return {lat: x, lng: y}
}

export class MapEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/maps')
      .then((response) => {
        const data = response.data;
         console.log("data is", data);
        this.setState({data})
      })

  }

  render() {
    return (
      <div>
      { this.state.data.map(entries =>
        <Map
        google={this.props.google}
        zoom={16}
        initialCenter={ generateLatLng(entries.lat, entries.lng) }>
           <Marker onClick={this.onMarkerClick}
                   name={entries.name} position={ generateLatLng(entries.lat, entries.lng) } />
          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      )}
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY),
  libraries: ['places']
})(MapEntry)




