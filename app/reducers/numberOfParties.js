import { UPDATE_NUMBER_OF_PARTIES } from '../actions'

export default status = (state = 5, action) => {
  switch (action.type) {
    case UPDATE_NUMBER_OF_PARTIES:
      return action.numberOfParties

    default:
      return state
  }
}
