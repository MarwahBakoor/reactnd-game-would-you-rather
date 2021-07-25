import React, {Component} from 'react'
import Score from './Score'
import '../Style/LeaderBoard.css'
class LeaderBoard extends Component {
    render(){
        return(
            <section className="section">
                <div className="text">Leader Board</div>
                <div className="leader-board">
                    <Score />
                    <Score />
                    <Score />
                </div>
               
            </section>
        )
    }
}

export default  LeaderBoard