import { combineReducers } from 'redux'

const user = (state='', action) => {
  switch (action.type) {
    case 'NAME':
      return state
    default:
      return state
  }
}
const login = (state='', action) => {
  switch (action.type) {
    case 'NAME':
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user,
  login,
})

export default rootReducer
