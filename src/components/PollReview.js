import React,{Component} from 'react'
import '../Style/PollReview.css'
import Avatar from '../images/Avatar1.png'
class PollReview extends Component {
    render(){
        return(
            <div className='poll-review'>
                <div className='profile-img' >
                     <img src={Avatar} alt="profileImg"  />
                </div>
                <div className="content">
                    <div className="title">
                            Sarah Edo Asks:
                    </div>
                    <div className="question">
                        Would You Rather?
                    </div>  
                    <ul className="Options">
                        <li>
                            Front-end Deveolpment
                        </li>
                        <li>
                            Back-end Deveolpment
                        </li>

                    </ul>
                </div>

                <a href="#" className="view-poll">View Poll</a>
                
            </div>
        )
    }
}

export default PollReview