import React,{Component} from 'react'
import { connect } from 'react-redux'
import '../Style/PollResults.css'
import { formatQuestion } from '../utils/helpers'
import {NavLink} from 'react-router-dom'
class PollResults extends Component {

    render(){
        const {avatarURL, name, optionOne, optionTwo,id} = this.props.question
        const {answer, op1, op2, votesNumber} = this.props
        const op1pPer = Math.round(op1/(op1+op2) * 100)
        const op2pPer = Math.round(op2/(op1+op2) * 100)
        return(
            <NavLink to={`/questions/${id}`} exact className='poll-result-links' >
            <div className='box'>
                <div className='profile-img' >
                     <img src={avatarURL} alt="profileImg"  />
                </div>
                <div className="content">
                    <div className="title">
                            Asked by {name}: 
                    </div>
                    <div className="choices-container" >

                        <div className={`choice ${op1pPer > op2pPer  ? 'winner' : ''}`}>
                            <h3> Would you rather be {optionOne.text} </h3>
                            <div>
                                <div className="progress">
                                    <span className="progress-bar" style={{width:`${op1pPer}%`}} ></span>
                                </div>
                                <div className="percentage"> {op1pPer}% </div>
                            </div>
                            
                            {
                                answer === 'optionOne' ?
                                <div className="user-vote">
                                    <span>Your Vote</span>
                                </div> 
                                : ''
                            }
                            <span>{op1} out of {votesNumber} votes</span>
                            
                        </div>
                        <div className={`choice ${op1pPer < op2pPer  ?'winner': '' }`}>
                            <h3> Would you rather be {optionTwo.text} </h3>
                            <div>
                                <div className="progress">
                                    <span className="progress-bar" style={{width:`${op2pPer}%`}} ></span>
                                </div>
                                <div className="percentage"> {op2pPer}% </div> 
                            </div>
                            {
                                answer === 'optionTwo' ?
                                <div className="user-vote">
                                    <span>Your Vote</span>
                                </div> 
                                : ''
                            }
                            <span>{op2} out of {votesNumber} votes</span>
                        </div>
                        <span className="votes"> Votes Number: {votesNumber} </span>
                    </div>
                </div>
                
            </div>
            </NavLink>
        )
    }
}

function mapStateToProps({questions,authedUser,users},{id}){
    const question = questions[id]
    const author = users[question.author]
    let answer
    if(question.optionOne.votes.includes(authedUser)){
        answer ='optionOne'
    }else if(question.optionTwo.votes.includes(authedUser)) {
        answer ='optionTwo'
    }
    //  calculate percentage
    const op1 = question.optionOne.votes.length
    const op2 =question.optionTwo.votes.length
    const votesNumber = op1 + op2
    return {
        question: formatQuestion(question,author),
        authedUser,
        answer,
        op1,
        op2,
        votesNumber
 
    }

}


export default connect(mapStateToProps)(PollResults)