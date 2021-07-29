import React, {Component } from "react";
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Signin from './Signin'
import NotFound from './NotFound'
import PrivateRoute from "../utils/PrivateRoute";
import '../Style/App.css'
import Pages from './Pages'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render(){
    // if(this.props.signin) {
    //   return  <Signin /> 
    // }
    return (
      <Router>
        <div className="App">
          <Switch> 
            <Route path='/signin'  component={Signin} />
            <PrivateRoute path = '/' exact singin={this.props.signin}> <Pages /> </PrivateRoute>
            <PrivateRoute path = '/new-question' exact singin={this.props.signin}> <Pages /> </PrivateRoute>
            <PrivateRoute path = '/leader-board' exact singin={this.props.signin}> <Pages /> </PrivateRoute>
            <PrivateRoute path = '/poll-results/:id' exact singin={this.props.signin}> <Pages /> </PrivateRoute>
            <Route component={NotFound} />

          </Switch> 
        </div>
      </Router>
    );

  }
  
}

function mapStateToProps({authedUser}){
  return {
    signin: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
