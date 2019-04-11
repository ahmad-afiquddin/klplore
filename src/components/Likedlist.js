import React, { Component } from 'react';
import "./Likedlist.css"
import heartempty from "./heart.png"
import heartfilled from "./heartfilled.png"

class Likedlist extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            heart:heartfilled,
        }
    }

    handleChange(liked)
    {
        return <li><a href={this.props.liked[liked]} target="_blank" rel="noopener noreferrer">{liked}</a></li>
    }

    render() {
        var liked = Object.keys(this.props.liked).map(liked => (this.handleChange(liked)))
        return (
            <div className="likecomponents">
                <div className="heartlogo"><img src={this.state.heart} style={{width:25}} alt="heart"/></div>
                <div className="likecolumn">
                    <ul>
                        {liked}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Likedlist;