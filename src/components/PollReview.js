import React,{Component} from 'react'
import '../Style/PollReview.css'
import Avatar from '../images/Avatar1.png'
class PollReview extends Component {
    state = {
        selectedOption:''
    }
    handleClick=(option) => {
        this.setState(()=>({
            chosenOption:option
        }))
    }
    render(){
        const selectedOption = this.state.chosenOption
        return(
            <div className='box poll-review'>
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
                        <li className={selectedOption === 'op1' ? 'selected' : '' } onClick={()=> this.handleClick('op1') }>
                             Front-end Deveolpment
                        </li>
                        <li className={selectedOption === 'op2' ? 'selected' : '' } onClick={()=> this.handleClick('op2') }>
                            <span>
                             Back-end Deveolpment
                            </span>
                        </li>

                    </ul>
                </div>

                <a href="#" className="btn">Submit</a>
                
            </div>
        )
    }
}

export default PollReview