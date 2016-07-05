import { connect } from 'react-redux'
import { cancelRace, completeLap } from '../actions'
import RaceComponent from '../components/Race'

const getLastLap = (state, party) => {
  if(party.laps.length > 0) return party.laps[party.laps.length - 1]
  else return state.timer
}

const mapStateToProps = (state, ownProps) => {
  return {
    timer: state.timer,
    isRace: state.status === 'RACE',
    parties: state.parties.slice(0, state.numberOfParties).map((party) => ({
      ...party,
      lastLap: getLastLap(state, party)
    }))
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    cancelRace: () => {
      dispatch(cancelRace())
      ownProps.navigator.pop()
    },
    completeLap: (id) => {
      dispatch(completeLap(id))
    }
  }
}

const Race = connect(
  mapStateToProps,
  mapDispatchToProps
)(RaceComponent)

export default Race
