export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'


export function reciveQuestions(questions){
    return {
        type:RECEIVE_QUESTIONS,
        questions
    }
}
