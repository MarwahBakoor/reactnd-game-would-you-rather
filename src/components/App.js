import React, {Component } from "react";
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import NewQuestion from "./NewQuestion"
import LeaderBoard  from "./LeaderBoard"
import Signin from './Signin'
import PollResultsPage from './PollResultsPage'

import '../Style/App.css'

class App extends Component {
  state = {
    signin:false
  }
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render(){
    if(this.props.signin){
      return <Signin />
    } 
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path = '/' exact component={Home}/>
          <Route path = '/new-question' component = {NewQuestion} />
          <Route path='/leader-board' component = {LeaderBoard} />
          <Route path = '/poll-results-page/:id' component = {PollResultsPage} />
        </div>
      </Router>
    )

}
  
}

function mapStateToProps({authedUser}){
  return {
    signin: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
