import React, { Component } from "react";
import {connect} from 'react-redux'
import '../Style/Signin.css'
class Signin extends Component {
    state = {
        selectedUser:''
    }
    handleChange = (event) => {
        this.setState({selectedUser: event.target.value});
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
                    <form>
                        <div class="select">
                            <select id="standard-select" value={this.state.selectedUser} onChange={this.handleChange}>
                                <option hidden selected>Select user...</option>
                                {this.props.users.map((user)=>
                                (
                                    <option key={user.id} value={user.id}> {user.name}</option>
                                )
                                
                                )}
                                <span class="focus"></span>
                            </select>
                        </div>

                        <button id='signin-btn' className='btn'> Sign in </button>
                        
                    </form>

                </div>
            </div>
        )
    }
}
function mapStateToProps({users}){

    return {
        users: users? Object.values(users) : []
    }

}

export default connect(mapStateToProps)(Signin);