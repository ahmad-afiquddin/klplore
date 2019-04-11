import React, { Component } from 'react';
import Leaflet from 'leaflet'
import {Marker as LeafletMarker} from 'react-leaflet'
import Popup from './Popup'
import mapIcon from '../svg/map.svg'

class Marker extends Component {
    render() {
        const {business} = this.props
        return (
            <LeafletMarker
                position = {{
                    lat:business.coordinates.latitude,
                    lng:business.coordinates.longitude,
                }}

                riseOnHover
                icon = { new Leaflet.Icon({
                    iconUrl:mapIcon,
                    iconSize:[25,25],
                    popupAnchor: [0,55],
                })}
		    >

            <Popup business={business} onLike = {this.props.onLike}/>
            </LeafletMarker>

        );
    }
}

export default Marker;