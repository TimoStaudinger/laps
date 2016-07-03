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

const Timer = (props) => (
  <View style={styles.row}>
    <View style={styles.item}>
      <Text style={styles.timer}>
        {msToTime(props.children)}
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15
  },
  item: {
    flex: 1
  },
  timer: {
    fontSize: 40,
    textAlign: 'center',
    color: '#333333'
  }
})

export default Timer
