import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollReview from './PollReview'
import PollResults from './PollResults'

import '../Style/Home.css'

class Home extends Component {
    state = {
        selected:'Unanswered'
    }

    handleToggle = (select) => {
        this.setState({
            selected:select
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
                                    <span className={selected === 'Unanswered' ? 'selected' : ''}> Unanswered Questions </span> 
                                </li>
                                <li className="title" onClick={()=> this.handleToggle('Answered')}>
                                    <span className={selected === 'Answered' ? 'selected' : ''}> Answered Questions </span>
                                </li>
                            </ul>
                        <div className="poll-dashboard">
                            {
                                selected === 'Unanswered'?
                                this.props.unansweredQuestions.map((id)=> <PollReview key={id} id={id}/> ):
                                this.props.answeredQuestions.map((id)=> <PollResults key={id} id={id}/>)
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
    let answeredQuestions = []
    let unansweredQuestions = []
    const a = []
    const b = []
    for(const id in questions) {
        const votes= [...questions[id].optionOne.votes,...questions[id].optionTwo.votes]
        if(votes.includes(authedUser)){
            answeredQuestions.push(questions[id])
            a.push(questions[id])
        }else {
            unansweredQuestions.push(questions[id])
            b.push(questions[id])
        }
    }
    answeredQuestions = answeredQuestions.sort((a,b) => b.timestamp -  a.timestamp )
    unansweredQuestions = unansweredQuestions.sort((a,b) => b.timestamp -  a.timestamp )
    
    return {
        answeredQuestions: answeredQuestions.map((q)=>q.id),
        unansweredQuestions:unansweredQuestions.map((q)=>q.id)
    }
  }

export default connect(mapStateToProps)(Home);
