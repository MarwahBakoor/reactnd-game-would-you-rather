import React, {Component} from 'react'
import Avatar from '../images/Avatar1.png'
import '../Style/Score.css'


class Score extends Component {
    render(){
        const {name, answersNumber, questionNumber, score, avatarURL} = this.props.info
        return(
            <div className='box' id='score-box'>
                <div className='profile-img' >
                     <img src={avatarURL} alt="profileImg"  />
                </div>
                <h1 className="name">{name}</h1>
                <div className="score-details-container">
                    <div class="score-details">
                        Answered Questions: <span> {answersNumber} </span>
                    </div>
                    <div class="score-details">
                        Created Questions: <span> {questionNumber} </span>
                    </div>
                </div>  
                <div className="score">
                    <span> {score} </span>
                </div>              
            </div>
        )
    }
}

export default Score