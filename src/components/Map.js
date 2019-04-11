import React, { Component } from 'react';
import {Map as LeafletMap, TileLayer} from 'react-leaflet'
import "./Map.css"
import Marker from './Marker'

const MAPBOX_URL = 'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={YOUR MAPBOX API KEY HERE}';


class Map extends Component {
  constructor(props)
  {
    super(props);
    this.state = {};
  }


  render() {

    return (  
      <LeafletMap
        style = {{height:"100vh"}}
        center = {this.props.initial_viewport.center}
        zoom = {this.props.initial_viewport.zoom}
        animate
      >
        <TileLayer
          id='streets-v11'
          url={MAPBOX_URL}
        />

        {
          this.props.results.map(business => (
					  <Marker
					    key = {business.id}
              business = {business}
              onLike = {this.props.onLike}
					  />
          ))
        }
      
      </LeafletMap>
    );
  }
}

export default Map;
