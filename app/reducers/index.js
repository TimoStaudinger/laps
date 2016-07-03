import { combineReducers } from 'redux'
import status from './status'
import timer from './timer'
import parties from './parties'

export default combineReducers({
  status,
  timer,
  parties
})
