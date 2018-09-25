import React from 'react'

const eventMap = (props) => {
  return (
    <Map
      google={this.props.google}
      zoom={16}
      initialCenter={{lat: 43.6446002, lng: -79.3951586}}>
      {this.generateMapMarkers}
    </Map>
  )
}

export default