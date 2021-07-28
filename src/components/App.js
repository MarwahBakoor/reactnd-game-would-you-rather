import React, {Component } from "react";
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Nav from './Nav'
import Home from './Home'
import NewQuestion from "./NewQuestion";
import LeaderBoard  from "./LeaderBoard";

import '../Style/App.css'

class App extends Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <LeaderBoard />
      
      </div>
    );

  }
  
}

export default connect()(App);
