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

export const UPDATE_NUMBER_OF_PARTIES = 'UPDATE_NUMBER_OF_PARTIES'
export const updateNumberOfParties = (numberOfParties) => ({
  type: UPDATE_NUMBER_OF_PARTIES,
  numberOfParties
})
