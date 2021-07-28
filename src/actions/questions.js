import {saveQuestionAnswer, saveQuestion} from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER '
export const SAVE_QUESTION = 'SAVE_QUESTION'


export function reciveQuestions(questions){
    return {
        type:RECEIVE_QUESTIONS,
        questions
    }
}

function answerQuestion({authedUser, qid, answer}){
    return {
        type:SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

function addQuestion(question){
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleAddQuestion(info){
    return (dispatch,getState) => {
        const {authedUser} = getState()
        console.log(info)
        return saveQuestion ({
            ...info,
            author:authedUser
        })
        .then((question) =>dispatch(addQuestion(question)))
    }
}

export function handleSaveAnswer(info){
    return (dispatch) => {        
        return saveQuestionAnswer(info)
        .then(()=>dispatch(answerQuestion(info)))

    }

}