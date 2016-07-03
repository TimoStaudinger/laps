import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import App from '../containers/App'
import reducer from '../reducers'

class InjectedApp extends Component {
  constructor(props) {
    super(props)

    const loggerMiddleware = createLogger()
    this.store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
  }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}

export default InjectedApp
