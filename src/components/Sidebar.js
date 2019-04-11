import React, { Component } from 'react';
import './Sidebar.css';
import kl from './kl.png';
import Dropdown from './Dropdown'
import Likedlist from './Likedlist'

const categories = {
                    "Food":[{"category":"restaurants","term":"Malay"},{"category":"restaurants","term":"Chinese"},{"category":"restaurants","term":"Indian"}],
                    "Entertainment":[{"category":"arts","term":"Theatres"},{"category":"arts","term":"Cinemas"},{"category":"nightlife","term":"Clubs"},{"category":"shopping","term":"Shopping"}],
                    "Sightseeing":[{"category":"arts","term":"Arts"},{"category":"arts","term":"Culture"},{"category":"landmarks","term":"Historical"},{"category":"landmarks","term":"Landmarks"}],
                }

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-title"><img src={kl} className="sidebar-logo" alt="KLCC"/>KLPlore</div>
                <Dropdown
                    category={categories}
                    onChange = {this.props.onChange} 
                /> 
                <Likedlist
                    liked = {this.props.liked}
                />
            </div>
        );
    }
}

export default Sidebar;