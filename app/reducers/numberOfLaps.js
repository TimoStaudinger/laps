import {UPDATE_NUMBER_OF_LAPS} from '../actions'

export default (state = 5, action) => {
  switch (action.type) {
    case UPDATE_NUMBER_OF_LAPS:
      return action.numberOfLaps

    default:
      return state
  }
}
