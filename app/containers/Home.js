import {connect} from 'react-redux'
import {
  startRace,
  updateNumberOfParties,
  updateNumberOfLaps
} from '../actions'
import HomeComponent from '../components/Home'

const mapStateToProps = (state) => ({
  numberOfParties: state.numberOfParties,
  numberOfLaps: state.numberOfLaps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  startRace: () => {
    dispatch(startRace())
    ownProps.navigator.push({id: 'RACE'})
  },
  updateNumberOfParties: (numberOfParties) => {
    dispatch(updateNumberOfParties(numberOfParties))
  },
  updateNumberOfLaps: (numberOfLaps) => {
    dispatch(updateNumberOfLaps(numberOfLaps))
  }
})

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default Home
