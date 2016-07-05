import { connect } from 'react-redux'
import { startRace, updateNumberOfParties } from '../actions'
import HomeComponent from '../components/Home'

const mapStateToProps = (state, ownProps) => {
  return {
    numberOfParties: state.numberOfParties
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startRace: () => {
      dispatch(startRace())
      ownProps.navigator.push({id: 'RACE'})
    },
    updateNumberOfParties: (numberOfParties) => {
      dispatch(updateNumberOfParties(numberOfParties))
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default Home
