import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, Platform } from 'react-native'
import Button from 'apsl-react-native-button'

const Home = (props) => (
  <View style={styles.verticalContainer}>
    <Button
      style={styles.button}
      onPress={props.startRace}
    >
      Start!
    </Button>
  </View>
)

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    borderWidth: 0,
    backgroundColor: '#8BC34A'
  }
})

export default Home
