import { COMPLETE_LAP, START_RACE, CANCEL_RACE } from '../actions'
import * as ColorScheme from '../tools/ColorScheme'

const initialState = [{
  name: 'Party A',
  id: 'Party A',
  ...ColorScheme.RED,
  laps: []
}, {
  name: 'Party B',
  id: 'Party B',
  ...ColorScheme.ORANGE,
  laps: []
}, {
  name: 'Party C',
  id: 'Party C',
  ...ColorScheme.YELLOW,
  laps: []
}, {
  name: 'Party D',
  id: 'Party D',
  ...ColorScheme.LIGHT_GREEN,
  laps: []
}, {
  name: 'Party E',
  id: 'Party E',
  ...ColorScheme.BLUE,
  laps: []
}, {
  name: 'Party F',
  id: 'Party F',
  ...ColorScheme.INDIGO,
  laps: []
}, {
  name: 'Party G',
  id: 'Party G',
  ...ColorScheme.PURPLE,
  laps: []
}, {
  name: 'Party H',
  id: 'Party H',
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
