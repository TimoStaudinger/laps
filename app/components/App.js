import React from 'react'
import {Navigator} from 'react-native'
import Race from '../containers/Race'
import Home from '../containers/Home'

const App = () => {
  const renderScene = (route, navigator) => {
    switch (route.id) {
      case 'HOME':
        return (<Home navigator={navigator} title="Home" />)
      case 'RACE':
        return (<Race navigator={navigator} title="Race" />)

      default:
        return null
    }
  }

  return (
    <Navigator
      initialRoute={{id: 'HOME'}}
      renderScene={renderScene}
    />
  )
}

export default App
