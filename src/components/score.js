import React, {Component} from 'react'
import Avatar from '../images/Avatar1.png'
import '../Style/Score.css'


class Score extends Component {
    render(){
        return(
            <div className='box'>
                <div className='profile-img' >
                     <img src={Avatar} alt="profileImg"  />
                </div>
                <h1 className="name">Sara Adam</h1>
                <div className="score-details-container">
                    <div class="score-details">
                        Answered Questions: <span> 10 </span>
                    </div>
                    <div class="score-details">
                        Created Questions: <span> 10 </span>
                    </div>
                </div>  
                <div className="score">
                    <span> 20 </span>
                </div>              
            </div>
        )
    }
}

export default Score