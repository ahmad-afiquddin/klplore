import React, { Component } from 'react';
import "./Likebutton.css"
import heartempty from './heart.png'
import heartfilled from './heartfilled.png'

class Likebutton extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            heart:heartempty
        }
    }

    handlePress()
    {   
        if (this.state.heart === heartempty)
        {
            this.setState({heart:heartfilled})
            this.props.onLike(this.props.business, 1)
        }
        else
        {
            this.setState({heart:heartempty})
            this.props.onLike(this.props.business, 0)
        }
    }

    render() {
        return (
                <button onClick={this.handlePress.bind(this)} className="likebutton"><img src={this.state.heart} alt="heart" style={{width:15}}/></button>
        );
    }
}

export default Likebutton;
