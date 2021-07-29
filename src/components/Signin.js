import React, { Component } from "react";
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'  
import '../Style/Signin.css'
class Signin extends Component {
    state = {
        selectedUser:''
    }
    handleChange = (event) => {
        this.setState({selectedUser: event.target.value});
      }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(setAuthedUser(this.state.selectedUser))
    }
    render(){
        return(
            <div className='signin'>
                <div className='signin-box'>
                    <div className='site-logo'>
                        <i className='bx bx-equalizer icon' ></i>
                    </div>
                    <div className='site-title'>
                        <h1>Would You Rather</h1>
                    </div>
                    <form onSubmit ={this.handleSubmit}>
                        <div className="select">
                            <select id="standard-select" value={this.state.selectedUser} onChange={this.handleChange}>
                                <option hidden defaultValue>Select user...</option>
                                {this.props.users.map((user)=>
                                (
                                    <option key={user.id} value={user.id}> {user.name}</option>
                                )
                                
                                )}
                            </select>
                        </div>

                        <button id='signin-btn' className='btn'> Sign in </button>
                        
                    </form>

                </div>
            </div>
        )
    }
}
function mapStateToProps({users, authedUser}){

    return {
        users: users? Object.values(users) : [],
        authedUser

    }

}

export default connect(mapStateToProps)(Signin);