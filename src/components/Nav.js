import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import '../Style/Nav.css'
class Nav extends Component {
    handleLogOut = () =>{
        this.props.dispatch(setAuthedUser(null))
    }
    render(){
        const {name, avatarURL, job} =  this.props.user? this.props.user :''
        return (

            <div className = 'NavBar'>   
                <div className={'sidebar open'}>
                    <div className="logo-details">
                    <i className='bx bx-equalizer icon' ></i>
                        <div className="logo_name">WYR</div>
                        <i className= 'bx bx-menu-alt-right logo'></i>
                    </div>
                    <ul className="nav-list">
                        <li>
                            <NavLink to='/' exact >
                                <i className='bx bx-grid-alt'></i>
                                <span className="links_name">Home</span>
                            </NavLink>
                            <span className="tooltip">Home</span>
                        </li>
                        <li>
                            <NavLink to='/add' exact activeClassName='active' >
                                <i className='bx bx-message-add' ></i>
                                <span className="links_name">New Question</span>
                            </NavLink>
                        <span className="tooltip">New</span>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' exact activeClassName='active' >
                                <i className='bx bx-group' ></i>
                                <span className="links_name">Leader Boards</span>
                            </NavLink>
                        <span className="tooltip">Boards</span>
                        </li>
                        <li className="small-screen-profile">                     
                            <div className="authedUser_name">{name}</div>
                            <img src={avatarURL} alt="profileImg"  />       

                        </li>
                        <li className="profile">
                            <div className="profile-details">
                            <img src={avatarURL} alt="profileImg"  />
                            <div className="name_job">
                                <div className="authedUser_name">{name}</div>
                                <div className="job">{job}</div>
                            </div>
                            </div>
                            <div onClick={this.handleLogOut}>
                                <i  className='bx bx-log-out' id="log_out" ></i>
                            </div>
                            </li>         
                    </ul>
                </div>
            </div> 

        )
    }
}


function mapStateToProps({authedUser, users}){

    return {
        user: users? users[authedUser] :{}
    }

}

export default connect(mapStateToProps)(Nav);