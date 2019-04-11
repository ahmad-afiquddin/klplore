import React, { Component } from 'react';
import {Popup as LeafletPopup} from 'react-leaflet';
import './Popup.css'
import Likebutton from './Likebutton'

class Popup extends Component {

	handleLocation(location)
	{
		var retStr = "";
		retStr = retStr + location.address1;
		if (location.address2)
		{
			retStr = retStr + ", " + location.address2;
		}
		if (location.address3)
		{
			retStr = retStr + ", " + location.address3;
		}
		return retStr;
	}

    render() {
		return (
			<LeafletPopup closeButton={false} autoPan={false}>
				<p className="popup-title"> 
					{this.props.business.name}
					{<Likebutton  business= {this.props.business} onLike = {this.props.onLike}/>}
				</p>
				{this.props.business.image_url && 
					<div className = "popup-image">
						<a href={this.props.business.url} target="_blank" rel="noopener noreferrer">
							<img src= {this.props.business.image_url}
								alt = {this.props.business.name}
								style = {{width:150}}
							/>
						</a>
					</div>
				}
				<div className = "popup-details">
					<p className="popup-ratings">
						Rating: {this.props.business.rating} out of 5 starts
					</p>
					<p className="popup-ratings">
						Address: {this.handleLocation(this.props.business.location)}
					</p>
				</div>
			</LeafletPopup>

        );
    }
}

export default Popup;