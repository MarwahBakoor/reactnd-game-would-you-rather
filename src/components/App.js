import React, {Component } from "react";
import Nav from './Nav'
import Home from './Home'

import '../Style/App.css'

class App extends Component {

  render(){
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );

  }
  
}

export default App;
