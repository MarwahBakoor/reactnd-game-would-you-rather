import { getInitialData } from '../utils/api'
import { reciveQuestions } from './questions'
import { reciveUsers } from './users'
import { setAuthedUser } from './authedUser'

export const AUTHED_ID = 'tylermcginnis';


export function handleInitialData(){
    return (despatch) => {
        return getInitialData()
        .then(({users,questions}) => {
            despatch(reciveUsers(users))
            despatch(reciveQuestions(questions))
            despatch(setAuthedUser(AUTHED_ID))
        })
    }
}