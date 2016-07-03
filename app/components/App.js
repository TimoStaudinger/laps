import React, { Component } from 'react'
import Race from '../containers/Race'
import Home from '../containers/Home'

class App extends Component {
  render() {
    let content = null

    if(this.props.status === 'RACE') {
      content = <Race />
    } else {
      content = <Home />
    }

    return content
  }
}

export default App
