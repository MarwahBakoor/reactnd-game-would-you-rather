import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollReview from './PollReview'
import PollResults from './PollResults'

import '../Style/Home.css'

class Home extends Component {
    state = {
        selected:'Unanswered'
    }

    handleToggle = (s) => {
        this.setState({
            selected:s
        })
    }

    render(){
        const selected = this.state.selected
        return(
                <section className="section">
                    <div className="text">Home</div>
                    <div className="home-pool-cards">
                            <ul className="cards-titles">
                                <li className="title" onClick={()=> this.handleToggle('Unanswered')} >
                                    <a className={selected === 'Unanswered' ? 'selected' : ''}> Unanswered Questions </a> 
                                </li>
                                <li className="title" onClick={()=> this.handleToggle('Answered')}>
                                    <a className={selected === 'Answered' ? 'selected' : ''}> Answered Questions </a>
                                </li>
                            </ul>
                        <div className="poll-dashboard">
                            {
                                selected === 'Unanswered'?
                                this.props.answeredQuestions.map((id)=> <PollReview key={id} id={id}/> ):
                                this.props.unansweredQuestions.map((id)=> <PollResults key={id} id={id}/>)
                            }

                        </div>

                    </div>
                    <div>

                    </div>
                </section>
        )
    }
}

function mapStateToProps({questions,authedUser}){
    const answeredQuestions = []
    const unansweredQuestions = []
    for(const id in questions) {
        const votes= [...questions[id].optionOne.votes,...questions[id].optionTwo.votes]
        if(votes.includes(authedUser)){
            answeredQuestions.push(questions[id].id)
        }else {
            unansweredQuestions.push(questions[id].id)
        }
    }
    return {
        answeredQuestions: answeredQuestions,
        unansweredQuestions:unansweredQuestions
    }
  }

export default connect(mapStateToProps)(Home);
