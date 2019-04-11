import React, { Component } from 'react';
import './App.css'
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import {searchBusiness} from './modules/yelpAPI'


const INITIAL_VIEWPORT = 
{
  center:[3.1390,101.6869],
  zoom:15,
}

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      results:[],
      mapCenter:
      {
        lat:INITIAL_VIEWPORT.center[0],
        lng:INITIAL_VIEWPORT.center[1],
      },
      searchStr:'',
      liked:{},
    }
  }

  handleSearch = async(searchStr) =>
  {
    const results = await searchBusiness(searchStr.term, INITIAL_VIEWPORT.center, searchStr.category);
    this.setState({results:results,searchStr:searchStr.term})
  }

  handleLikes = async(business, like) =>
  {
    if (like === 1)
    {
      this.state.liked[business.name] = business.url
    }
    else
    {
      delete this.state.liked[business.name]
    }
    console.log(this.state.liked)
  }

  render() {
    return (
      <div className="container">
        <Sidebar onChange={this.handleSearch} liked = {this.state.liked}/>
        <Map initial_viewport = {INITIAL_VIEWPORT} results={this.state.results} onLike = {this.handleLikes}/>
      </div>
    );
  }
}



export default App;