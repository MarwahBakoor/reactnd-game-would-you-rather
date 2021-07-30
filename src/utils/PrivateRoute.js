import React from 'react-dom'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

function PrivateRoute({ children,singin,...rest }) {
  const path = rest.path
    return (
      <Route {...rest} render={() => {
        return singin
          ? <Redirect  to={{
            pathname: '/signin',
            state: {path }
          }} />
          :children 
      }} />
    )
  }

  function mapStateToProps({authedUser}){
    return {
      signin: authedUser === null,
    }
  }
  
  export default connect(mapStateToProps)(PrivateRoute);