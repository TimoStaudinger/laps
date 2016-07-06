import {combineReducers} from 'redux'
import status from './status'
import timer from './timer'
import parties from './parties'
import numberOfParties from './numberOfParties'
import numberOfLaps from './numberOfLaps'

export default combineReducers({
  status,
  timer,
  parties,
  numberOfParties,
  numberOfLaps
})
