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
    case 'NAMEE':
      return state
    default:
      return state
  }
}
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

const rootReducer = combineReducers({
  user,
  login,
  counter
})

export default rootReducer
