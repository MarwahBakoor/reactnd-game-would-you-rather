import React,{Component} from 'react'
import {connect} from 'react-redux'
import  {Redirect} from 'react-router-dom'
import PollResults from './PollResults'
import Poll from './Poll'
import '../Style/PollPage.css'

class PollPage extends Component {
    render(){
        if(this.props.id === ':id'){
            return <Redirect to='/*' /> 
        }
        return(
            <section className="section">
                <div className='Poll-Page'>
                    {this.props.answered? <PollResults id={this.props.id}/> : <Poll id={this.props.id} />}
                </div>
            </section>
        )

    }
}

function mapStateToProps({authedUser,users},{...props}){
    const id = props.match.params.id
    
    return {
        answered: users[authedUser].answers[id] ? true : false,
        id
    }

}


export default connect(mapStateToProps)(PollPage)