import React, {Component } from "react";
import Nav from './Nav'
import Home from './Home'
import NewQuestion from "./NewQuestion";
import LeaderBoard  from "./LeaderBoard";

import '../Style/App.css'

class App extends Component {

  render(){
    return (
      <div className="App">
        <Nav />
        <LeaderBoard />
      </div>
    );

  }
  
}

export default App;
