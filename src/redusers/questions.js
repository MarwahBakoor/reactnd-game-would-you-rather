import {RECEIVE_QUESTIONS,
    SAVE_QUESTION_ANSWER,
    SAVE_QUESTION
} from '../actions/questions'

export default function questions(state= null, action){
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ANSWER:
            const {authedUser, qid, answer} = action
            return {
                ...state, 
                [qid]: {
                    ...state[qid],
                    [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat([authedUser])
                    }
                }  
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]:action.question
            }
        default:
            return state
    }
}