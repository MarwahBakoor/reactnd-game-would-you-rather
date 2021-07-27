import React,{Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveAnswer} from '../actions/questions'
import '../Style/PollReview.css'
import { formatQuestion } from '../utils/helpers'
class PollReview extends Component {
    state = {
        chosenOption:''
    }
    handleClick=(option) => {
        this.setState(()=>({chosenOption:option}))
    }
    handleSubmit = () => {
            const {dispatch, id, authedUser } = this.props
            dispatch(handleSaveAnswer({
            authedUser, 
            qid:id,
            answer:this.state.chosenOption
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
                        <li className={selectedOption === 'optionOne' ? 'selected' : '' } onClick={()=> this.handleClick('optionOne') }>
                             {optionOne.text}
                        </li>
                        <li className={selectedOption === 'optionTwo' ? 'selected' : '' } onClick={()=> this.handleClick('optionTwo') }>
                            <span>
                            {optionTwo.text}
                            </span>
                        </li>

                    </ul>
                </div>

                <button disabled={selectedOption=== ''} onClick={this.handleSubmit} className="btn">Submit</button>
                
            </div>
        )
    }
}

function mapStateToProps({questions,authedUser,users},{id, handleToggle}){
    const question = questions[id]
    const author = users[question.author]
    return {
        question: formatQuestion(question,author),
        authedUser:authedUser,
        handleToggle
    }


}

export default connect(mapStateToProps)(PollReview)