import React,{Component} from 'react'
import '../Style/PollResults.css'
import Avatar from '../images/Avatar1.png'


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

export default PollResults