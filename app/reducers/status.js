import { START_RACE, CANCEL_RACE } from '../actions'

export default status = (state = 'HOME', action) => {
  switch (action.type) {
    case START_RACE:
      return 'RACE'

    case CANCEL_RACE:
      return 'HOME'

    default:
      return state
  }
}
