import React, {Component} from 'react'
import {connect}  from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import '../Style/NewQuestion.css'

class NewQuestion extends Component {
    state = {
      optionOne:'',
      optionTwo:''
    }

    handleChange = (option,event) =>{
        this.setState((previceState)=> ({
            [option]: event.target.value
        }))
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {optionOne, optionTwo} = this.state
        this.props.dispatch(handleAddQuestion({
            optionOneText:optionOne, 
            optionTwoText:optionTwo}))
        this.setState  (()=>({
            optionOne:'',
            optionTwo:''
        }))

    }
    render() {
        return(
            <section className="section">
                <div className="text">Create New Question</div>
                <div className="create-question-countener">
                    <h2> Would you rather ...</h2>
                    <div className="create-question-form">
                        <form onSubmit={this.handleSubmit} >
                            <input type="text" name="OptionOne" value={this.state.optionOne} onChange={(e) => this.handleChange('optionOne',e)}  placeholder="Enter Option Two Text Here"/>
                            <h3>OR</h3>
                            <input type="text" name="Option2" value={this.state.optionTwo} onChange={(e)=> this.handleChange('optionTwo',e)} placeholder="Enter Option Two Text Here"/>
                            <button id="create-question-form-btn" className='btn'> Submit </button>
                        </form>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default connect()(NewQuestion)
