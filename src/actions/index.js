import { _getQuestions, _getUsers } from '../utils/_DATA.js'
 export const GET_QUESTIONS = 'GET_QUESTIONS'
 export const GET_USERS = 'GET_USERS'
 /* API request error handling */

//load questions
const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}
 export const loadQuestions = () => {
  return dispatch => {
    return _getQuestions()
    .then((response) => {
        // convert questions to array
        const qIndices = Object.keys(response)
        const questions = qIndices.map(index =>  response[index] )
        dispatch(getQuestions(questions))
      })
  }
}

const getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}

export const loadUsers = () => {
  return dispatch => {
    return _getUsers()
    .then((response) => dispatch(getUsers(response)))
  }
}
