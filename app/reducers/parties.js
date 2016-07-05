import { COMPLETE_LAP, START_RACE, CANCEL_RACE } from '../actions'
import * as ColorScheme from '../tools/ColorScheme'

const initialState = [{
  name: 'Runner A',
  id: 'Runner A',
  ...ColorScheme.RED,
  laps: []
}, {
  name: 'Runner B',
  id: 'Runner B',
  ...ColorScheme.ORANGE,
  laps: []
}, {
  name: 'Runner C',
  id: 'Runner C',
  ...ColorScheme.YELLOW,
  laps: []
}, {
  name: 'Runner D',
  id: 'Runner D',
  ...ColorScheme.LIGHT_GREEN,
  laps: []
}, {
  name: 'Runner E',
  id: 'Runner E',
  ...ColorScheme.BLUE,
  laps: []
}, {
  name: 'Runner F',
  id: 'Runner F',
  ...ColorScheme.INDIGO,
  laps: []
}, {
  name: 'Runner G',
  id: 'Runner G',
  ...ColorScheme.PURPLE,
  laps: []
}, {
  name: 'Runner H',
  id: 'Runner H',
  ...ColorScheme.PINK,
  laps: []
}]

export default (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_LAP:
      return state.map(party => {
        if(action.id === party.id) return {...party, laps: [...party.laps, Date.now()]}
        else return party
      })
      break

    case CANCEL_RACE:
    case START_RACE:
      return initialState
      break

    default:
      return state
  }
}
