import React, { Component } from 'react'
import { Navigator } from 'react-native'
import Race from '../containers/Race'
import Home from '../containers/Home'

class App extends Component {
  render() {
    const renderScene = (route, navigator) => {
      switch (route.id) {
        case 'HOME':
          return (<Home navigator={navigator} title='Home'/>);
        case 'RACE':
          return (<Race navigator={navigator} title='Race' />);
      }
    }

    return (
      <Navigator
        initialRoute={{id: 'HOME'}}
        renderScene={renderScene}/>
    )
  }
}

export default App
