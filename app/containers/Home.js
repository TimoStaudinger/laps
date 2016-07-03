import { connect } from 'react-redux'
import { startRace } from '../actions'
import HomeComponent from '../components/Home'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startRace: () => {
      dispatch(startRace())
      ownProps.navigator.push({id: 'RACE'})
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default Home
