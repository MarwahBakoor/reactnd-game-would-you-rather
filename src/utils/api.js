import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA'


export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions(),
      ]).then(([users, questions]) => ({
        users,
        questions,
      }))
} 

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(authedUser, qid, answer){
    const op = {
        authedUser,
        qid,
        answer
    }
    return _saveQuestionAnswer(op)
}