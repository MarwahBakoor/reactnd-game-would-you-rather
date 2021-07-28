import React, { Component } from "react";
import {connect} from 'react-redux'
import '../Style/Singin.css'
class Singin extends Component {
    render(){
        return(
            <div className='singin'>
                <div className='singin-box'>
                    <div className='site-logo'>
                        <i className='bx bx-equalizer icon' ></i>
                    </div>
                    <div className='site-title'>
                        <h1>Would You Rather</h1>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect()(Singin);