import React,{Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveAnswer} from '../actions/questions'
import { formatQuestion } from '../utils/helpers'
import '../Style/Poll.css'

class Poll extends Component {
    state = {
        chosenOption:'',
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
        return(
                <div id='poll-review' className='box poll-review'>
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

                    <button disabled={selectedOption=== ''} onClick={this.handleSubmit} id='vote-button' className="btn">Submit</button>
                    
                </div>
        )
    }
}

function mapStateToProps({questions,authedUser,users},{id}){
    const question = questions[id]
    const author = users[question.author]
    return {
        question: formatQuestion(question,author),
        authedUser:authedUser,
    }


}

export default connect(mapStateToProps)(Poll)