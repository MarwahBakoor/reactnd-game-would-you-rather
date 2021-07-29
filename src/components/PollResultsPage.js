import React,{Component} from 'react'
import PollResults from './PollResults'
import '../Style/PollResultsPage.css'

class PollResultsPage extends Component {
    render(){
        console.log(this.props.id)
        return(
            <section className="section">
                <div className='Poll-Results-Page'>
                    <PollResults id={this.props.match.params.id}/> 
                </div>
            </section>
        )

    }
}


export default PollResultsPage