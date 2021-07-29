import React,{Component} from 'react'
import { connect } from 'react-redux'
import '../Style/PollResults.css'
import { formatQuestion } from '../utils/helpers'
class PollResults extends Component {

    render(){
        const {avatarURL, name, optionOne, optionTwo} = this.props.question
        const {answer, op1pPer, op2pPer, votesNumber} = this.props
        const winner = op1pPer > op2pPer 
        return(
            <div className='box'>
                <div className='profile-img' >
                     <img src={avatarURL} alt="profileImg"  />
                </div>
                <div className="content">
                    <div className="title">
                            Asked by {name}: 
                    </div>
                    <div className="choices-container" >

                        <div className={`choice ${winner ? 'winner' : ''}`}>
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
                            
                        </div>
                        <div className={`choice ${winner ? '' : 'winner'}`}>
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
                        </div>
                        <span className="votes"> Votes Number: {votesNumber} </span>
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps({questions,authedUser,users},{id}){
    const question = questions[id]
    const author = users[question.author]
    const answer = question.optionOne.votes.includes(authedUser) ? 'optionOne' :'optionTwo'
    //  calculate percentage
    const op1 = question.optionOne.votes.length
    const op2 =question.optionTwo.votes.length
    const votesNumber = op1 + op2
    const op1pPer = Math.round(op1/(op1+op2) * 100)
    const op2pPer = Math.round(op2/(op1+op2) * 100)

    return {
        question: formatQuestion(question,author),
        authedUser,
        answer,
        op1pPer,
        op2pPer,
        votesNumber
 
    }

}


export default connect(mapStateToProps)(PollResults)