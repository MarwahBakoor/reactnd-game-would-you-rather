import React, { Component } from 'react'
import PollReview from './PollReview'
import PollResults from './PollResults'

import '../Style/Home.css'

class Home extends Component {
    render(){
        return(
                <section className="section">
                    <div className="text">Home</div>
                    <div className="home-pool-cards">
                            <ul className="cards-titles">
                                <li className="title selcted" >
                                    <a className="selected"> Unanswered Questions </a> 
                                </li>
                                <li className="title" >
                                    <a> Answered Questions </a>
                                </li>
                            </ul>
                        <div className="poll-dashboard">
                            {/* <PollReview />
                            <PollReview />
                            <PollReview />
                            <PollReview />
                            <PollReview /> */}
                            <PollResults />
                            <PollResults />
                            <PollResults />
                        </div>

                    </div>
                    <div>

                    </div>
                </section>
        )
    }
}

export default Home;
