import React, {PropTypes} from 'react'
import {StyleSheet, Text, View} from 'react-native'

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

function msToTime(duration) {
  let milliseconds = parseInt((+duration % 1000), 10)
  let seconds = parseInt((+duration / 1000) % 60, 10)
  let minutes = parseInt((+duration / (1000 * 60)) % 60, 10)
  let hours = parseInt((+duration / (1000 * 60 * 60)) % 24, 10)

  hours = (hours < 10) ? `0${hours}` : hours
  minutes = (minutes < 10) ? `0${minutes}` : minutes
  seconds = (seconds < 10) ? `0${seconds}` : seconds

  if (milliseconds < 10) milliseconds = `00${milliseconds}`
  else if (milliseconds < 100) milliseconds = `0${milliseconds}`

  return `${hours}:${minutes}:${seconds}.${milliseconds}`
}

const InlineTimer = (props) => (
  <View style={styles.item}>
    <Text style={[styles.timer, {color: props.color}]}>
      {msToTime(props.timer)}
    </Text>
  </View>
)

InlineTimer.propTypes = {
  color: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired
}

export default InlineTimer
