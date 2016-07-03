import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'

function msToTime(duration) {
  duration = +duration
  let milliseconds = parseInt((duration % 1000))
  let seconds = parseInt((duration / 1000) % 60)
  let minutes = parseInt((duration/(1000 * 60)) % 60)
  let hours = parseInt((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds
  milliseconds = (milliseconds < 10) ? "00" + milliseconds :
                 (milliseconds < 100) ? '0' + milliseconds : milliseconds

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds
}

const InlineTimer = (props) => (
  <View style={styles.item}>
    <Text style={[styles.timer, {color: props.color}]}>
      {msToTime(props.timer)}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    flex: 1,
    fontSize: 20,
    margin: 10
  }
})

export default InlineTimer
