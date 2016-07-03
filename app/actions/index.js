export const START_RACE = 'START_RACE'
export const startRace = () => ({
  type: START_RACE
})

export const CANCEL_RACE = 'CANCEL_RACE'
export const cancelRace = () => ({
  type: CANCEL_RACE
})

export const COMPLETE_LAP = 'COMPLETE_LAP'
export const completeLap = (id) => ({
  type: COMPLETE_LAP,
  id
})
