import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const lngFrom = 24.771210;
const lngTo = 24.776715;
const latFrom = 59.423470;
const latTo = 59.435867;
// 59.423470, 24.771210
// 59.435867, 24.776715
class Map extends Component {



  componentDidMount() {
    let coords = [];
    for (let i=0;i<100;i++) {
      coords.push({id:i, latitude:this.getRandomInRange(latFrom, latTo, 6), longitude:this.getRandomInRange(lngFrom, lngTo, 6)});
    }
    this.setState({markers: coords});
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  render(){
    const GMap = withGoogleMap(props => (
     <GoogleMap
       defaultCenter = { { lat: 59.425997, lng: 24.774326 } }
       defaultZoom = { 18 }
     >
     <MarkerClusterer
       onClick={props.onMarkerClustererClick}
       averageCenter
       enableRetinaIcons
       gridSize={60}
     >
     {this.state.markers.map(marker => (
        <Marker
          key={marker.id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
      <Marker position={{ lat: 59.42598, lng: 24.77434 }} />
      </MarkerClusterer>
</GoogleMap>
    ));
    return(
      <div>
      <GMap
        containerElement={ <div style={{ height: `500px`}} /> }
        mapElement={ <div style={{ height: `100%` }} /> }
      />
    </div>
    );
  }
};
export default Map;
