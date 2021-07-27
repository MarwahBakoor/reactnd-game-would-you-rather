import React,{Component} from 'react'
import { connect } from 'react-redux'
import '../Style/PollResults.css'
import Avatar from '../images/Avatar1.png'
import { formatQuestion } from '../utils/helpers'
class PollResults extends Component {

    render(){
        return(
            <div className='box'>
                <div className='profile-img' >
                     <img src={Avatar} alt="profileImg"  />
                </div>
                <div className="content">
                    <div className="title">
                            Asked by Sarah Edo:
                    </div>
                    <div className="choices-container" >

                        <div className="choice winner">
                            <h3> Would you rather be back-end deveolper </h3>
                            <div>
                                <div className="progress">
                                    <span className="progress-bar" style={{width:'50%'}} ></span>
                                </div>
                                <div className="percentage"> 50% </div>
                            </div>
                            <div className="user-vote">
                                    <span>Your Vote</span>
                            </div>
                        </div>
                        <div className="choice">
                            <h3> Would you rather be front-end deveolper </h3>
                            <div>
                                <div className="progress">
                                    <span className="progress-bar" style={{width:'50%'}} ></span>
                                </div>
                                <div className="percentage"> 50% </div> 
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
    
    return {
        question: formatQuestion(question,author),
        authedUser,
        answer
        
    }

}


export default connect(mapStateToProps)(PollResults)