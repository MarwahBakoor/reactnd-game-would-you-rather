import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../Style/PollReview.css'
import { formatQuestion } from '../utils/helpers'
import {withRouter} from 'react-router-dom'

class PollReview extends Component {
    handleSubmit = () => {
        const {id } = this.props
        this.props.history.push(`/questions/${id}`)        
    }
    render(){
        const {avatarURL, name} = this.props.question
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
                    <h2>....</h2>
                </div>

                <button onClick={this.handleSubmit} id='vote-button' className="btn">See The Question</button>
                
            </div>
        )
    }
}

function mapStateToProps({questions,users},{id}){
    const question = questions[id]
    const author = users[question.author]
    return {
        question: formatQuestion(question,author),
    }


}

export default withRouter(connect(mapStateToProps)(PollReview))