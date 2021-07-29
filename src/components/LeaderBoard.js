import React, {Component} from 'react'
import {connect} from 'react-redux'
import Score from './Score'
import '../Style/LeaderBoard.css'
class LeaderBoard extends Component {
    render(){
        const {usersArray} = this.props
        return(
            <section className="section">
                <div className="text">Leader Board</div>
                <div className="leader-board">
                    {usersArray.map((user)=> <Score key={user.id} info={user} />)}

                </div>
               
            </section>
        )
    }
}



function mapStateToProps({users}){
    const usersArray = []
    for(const id in users) {
        const name = users[id].name
        const avatarURL = users[id].avatarURL
        const answersNumber = Object.keys(users[id].answers).length
        const questionNumber = users[id].questions.length
        usersArray.push({
            id,
            name,
            avatarURL,
            answersNumber,
            questionNumber,
            score:answersNumber + questionNumber
        })
    }
    const compare = (a,b) => {
        if(a.score > b.score) {
            return -1
        } else if (a.score < b.score) {
           return 1
        } else {
            return 0
        }
    }
    usersArray.sort(compare)
    return {
        usersArray 
    }

}

export default connect(mapStateToProps)(LeaderBoard)