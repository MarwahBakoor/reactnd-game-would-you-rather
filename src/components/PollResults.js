import React,{Component} from 'react'
import { connect } from 'react-redux'
import '../Style/PollResults.css'
import { formatQuestion } from '../utils/helpers'
class PollResults extends Component {
    
    render(){
        const {avatarURL, name, optionOne, optionTwo} = this.props.question
        const {answer, op1per, op2per} = this.props
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

                        <div className="choice winner">
                            <h3> Would you rather be {optionOne} </h3>
                            <div>
                                <div className="progress">
                                    <span className="progress-bar" style={{width: '50%' }} ></span>
                                </div>
                                <div className="percentage"> {op1per} </div>
                            </div>
                            <div className="user-vote">
                                    <span>Your Vote</span>
                            </div>
                        </div>
                        <div className="choice">
                            <h3> Would you rather be {optionTwo} </h3>
                            <div>
                                <div className="progress">
                                    <span className="progress-bar" style={{width:'50%'}} ></span>
                                </div>
                                <div className="percentage"> {op2per} </div> 
                            </div>
                            <div className="user-vote">
                                    <span>Your Vote</span>
                            </div>
                        </div>
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
    const op1 = question.optionOne.votes.length
    const op2 =  question.optionOne.votes.length
    const op1per = op1/(op1+op2) * 100
    const op2per = op2/(op1+op2) * 100
    return {
        question: formatQuestion(question,author),
        authedUser,
        answer,
        op1per,
        op2per
    }

}


export default connect(mapStateToProps)(PollResults)