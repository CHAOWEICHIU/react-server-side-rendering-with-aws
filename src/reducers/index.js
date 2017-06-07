import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import {
  GET_TOKEN_SUCCEED,
  GOT_ERROR_MESSAGE,
}                          from '../actions'

const counter = (state=0, action) => {
  switch (action.type) {
    case 'up':
      return state + 1
    case 'down':
      return state - 1
    default:
      return state
  }
}

const token = (state='', action) => {
  switch (action.type) {
    case GET_TOKEN_SUCCEED:
      return action.token
    default:
      return state
  }
}

const errors = (state={}, action) => {
  switch (action.type) {
    case GOT_ERROR_MESSAGE:
      return {...state, [action.from]:action.errorMessage}
    default:
      return state

  }
}

const rootReducer = combineReducers({
  counter,
  form,
  token,
  errors,
})

export default rootReducer
