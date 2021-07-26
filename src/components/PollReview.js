import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../Style/PollReview.css'
import { formatQuestion } from '../utils/helpers'
class PollReview extends Component {
    state = {
        selectedOption:''
    }
    handleClick=(option) => {
        this.setState(()=>({
            chosenOption:option
        }))
    }
    render(){
        const selectedOption = this.state.chosenOption
        const {avatarURL, name, optionOne, optionTwo} = this.props.question
        console.log(avatarURL)
        return(
            <div className='box poll-review'>
                <div className='profile-img' >
                     <img src={avatarURL} alt="profileImg"  />
                </div>
                <div className="content">
                    <div className="title">
                            {name} Asks:
                    </div>
                    <div className="question">
                        Would You Rather?
                    </div>  
                    <ul className="Options">
                        <li className={selectedOption === 'op1' ? 'selected' : '' } onClick={()=> this.handleClick('op1') }>
                             {optionOne.text}
                        </li>
                        <li className={selectedOption === 'op2' ? 'selected' : '' } onClick={()=> this.handleClick('op2') }>
                            <span>
                            {optionTwo.text}
                            </span>
                        </li>

                    </ul>
                </div>

                <a href="#" className="btn">Submit</a>
                
            </div>
        )
    }
}

function mapStateToProps({questions,authedUser,users},{id}){
    const question = questions[id]
    const author = users[question.author]
    return {
        question: formatQuestion(question,author),
        authedUser:authedUser
    }


}

export default connect(mapStateToProps)(PollReview)