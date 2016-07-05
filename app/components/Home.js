import React from 'react'
import { StyleSheet, Slider, Text, View, ToolbarAndroid } from 'react-native'
import Button from 'apsl-react-native-button'
import { APP as ColorScheme } from '../tools/ColorScheme'

const toolbarActions = [
  {title: 'Start timer', icon: require('../assets/ic_timer_white_48dp.png'), show: 'always'}
]

const Home = (props) => {
  const onActionSelected = (position) => {
    if (position === 0) { // Start timer
      props.startRace()
    }
  }

  return (
    <View style={styles.verticalContainer}>
      <ToolbarAndroid
        style={styles.toolbar}
        titleColor={ColorScheme.fontColor}
        title="Laps"
        actions={toolbarActions}
        onActionSelected={onActionSelected} />

      <View style={styles.buttonContainer}>
        <Text style={styles.label}>
          Runners: {props.numberOfParties}
        </Text>
        <Slider
          style={styles.input}
          maximumValue={8}
          minimumValue={1}
          step={1}
          onValueChange={props.updateNumberOfParties}
          value={props.numberOfParties}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  input: {
    margin: 5
  },
  label: {
    margin: 5,
    fontSize: 20
  },
  toolbar: {
    height: 54,
    backgroundColor: ColorScheme.primaryColor
  },
  buttonContainer: {
    flex: 1,
    margin: 15
  },
  button: {
    borderWidth: 0,
    backgroundColor: ColorScheme.primaryColor
  }
})

export default Home
