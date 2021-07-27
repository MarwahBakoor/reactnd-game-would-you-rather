import {saveQuestionAnswer} from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER '


export function reciveQuestions(questions){
    return {
        type:RECEIVE_QUESTIONS,
        questions
    }
}

export function answerQuestion({authedUser, qid, answer}){
    return {
        type:SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveAnswer(info){
    return (dispatch) => {        
        return saveQuestionAnswer(info)
        .then(()=>dispatch(answerQuestion(info)))

    }

}