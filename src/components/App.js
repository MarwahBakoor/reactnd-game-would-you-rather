import React, {Component } from "react";
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import NewQuestion from "./NewQuestion"
import LeaderBoard  from "./LeaderBoard"
import Signin from './Signin'

import '../Style/App.css'

class App extends Component {
  state = {
    signin:false
  }
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    if(!this.state.signin){
      return <Signin />
    } else {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path = '/' exact component={Home}/>
          <Route path = '/new-question' component = {NewQuestion} />
          <Route path='/leader-board' component = {LeaderBoard} />
        </div>
      </Router>
    );

  }
}
  
}

export default connect()(App);
