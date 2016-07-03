import { connect } from 'react-redux'
import { cancelRace } from '../actions'
import RaceComponent from '../components/Race'

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const mapStateToProps = (state, ownProps) => {
  return {
    timer: state.timer,
    parties: state.parties.map((party) => ({...party, timer: state.timer}))
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    cancelRace: () => {
      dispatch(cancelRace())
    }
  }
}

const Race = connect(
  mapStateToProps,
  mapDispatchToProps
)(RaceComponent)

export default Race
