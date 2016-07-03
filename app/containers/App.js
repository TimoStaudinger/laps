import { connect } from 'react-redux'
import AppComponent from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return {
    status: state.status
  }
}

const App = connect(
  mapStateToProps
)(AppComponent)

export default App
