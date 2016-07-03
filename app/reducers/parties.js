import { } from '../actions'
import * as ColorScheme from '../tools/ColorScheme'

const initialState = [{
  name: 'Party A',
  id: 'Party A',
  ...ColorScheme.RED
}, {
  name: 'Party B',
  id: 'Party B',
  ...ColorScheme.ORANGE
}, {
  name: 'Party C',
  id: 'Party C',
  ...ColorScheme.YELLOW
}, {
  name: 'Party D',
  id: 'Party D',
  ...ColorScheme.LIGHT_GREEN
}, {
  name: 'Party E',
  id: 'Party E',
  ...ColorScheme.BLUE
}, {
  name: 'Party F',
  id: 'Party F',
  ...ColorScheme.INDIGO
}, {
  name: 'Party G',
  id: 'Party G',
  ...ColorScheme.PURPLE
}, {
  name: 'Party H',
  id: 'Party H',
  ...ColorScheme.PINK
}]

export default status = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}
