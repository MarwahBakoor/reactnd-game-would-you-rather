import React, {Component} from 'react';
import '../Style/NewQuestion.css'

class NewQuestion extends Component {
    render() {
        return(
            <section className="section">
                <div className="text">Create New Question</div>
                <div className="create-question-countener">
                    <h2> Would you rather ...</h2>
                    <div className="create-question-form">
                        <form >
                            <input type="text" name="Option1" placeholder="Enter Option Two Text Here"/>
                            <h3>OR</h3>
                            <input type="text" name="Option2" placeholder="Enter Option Two Text Here"/>
                            <button id="create-question-form-btn" className='btn'> Submit </button>
                        </form>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default NewQuestion
