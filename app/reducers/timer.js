import {START_RACE, CANCEL_RACE} from '../actions'

export default (state = null, action) => {
  switch (action.type) {
    case START_RACE:
      return Date.now()

    case CANCEL_RACE:
      return null

    default:
      return state
  }
}
