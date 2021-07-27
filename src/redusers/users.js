import {RECEIVE_USERS} from '../actions/users'
import {SAVE_QUESTION_ANSWER} from '../actions/questions'

export default function users(state= null, action){
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTION_ANSWER:
            const {answer, authedUser, qid} = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default:
            return state
    }
}