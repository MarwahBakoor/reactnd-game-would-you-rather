import React, {Component} from 'react'
import '../Style/Nav.css'
import Avatar from '../images/Avatar1.png'
class Nav extends Component {
    state = {
        slidebar:false
    }
    menueToggle = () =>{
        this.setState((prevstat)=> ({
            slidebar:!prevstat.slidebar
        }))
    }
    render(){
        const slidebar = this.state.slidebar
        return (

            <div className = 'NavBar'>   
                <div className={`sidebar ${slidebar ? 'open' : ''}`}>
                    <div className="logo-details">
                    <i className='bx bx-equalizer icon' ></i>
                        <div className="logo_name">WYR</div>
                        <i className= {`bx ${slidebar ? "bx-menu-alt-right": "bx-menu" } `} id="btn" onClick = {this.menueToggle} ></i>
                    </div>
                    <ul className="nav-list">
                        <li>
                            <a href="#">
                            <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Home</span>
                            </a>
                            <span className="tooltip">Home</span>
                        </li>
                        <li>
                        <a href="#">
                            <i className='bx bx-message-add' ></i>
                            <span className="links_name">New Question</span>
                        </a>
                        <span className="tooltip">New</span>
                        </li>
                        <li>
                        <a href="#">
                            <i className='bx bx-group' ></i>
                            <span className="links_name">Leader Boards</span>
                        </a>
                        <span className="tooltip">Boards</span>
                        </li>
                        <li className="profile">
                            <div className="profile-details">
                            <img src={Avatar} alt="profileImg"  />
                            <div className="name_job">
                                <div className="name">Prem Shahi</div>
                                <div className="job">Web designer</div>
                            </div>
                            </div>
                            <i className='bx bx-log-out' id="log_out" ></i>
                        </li>
                    </ul>
                </div>
            </div> 

        )
    }
}

export default Nav;