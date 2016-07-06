import React, {PropTypes} from 'react'
import {StyleSheet, Text} from 'react-native'
import Party from './Party'

const styles = StyleSheet.create({
  lapText: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lapNumber: {
    fontSize: 25,
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const RunningParty = (props) => (
  <Party {...props}>
    <Text style={[styles.lapText, {color: props.primaryColor}]}>
      Lap <Text style={styles.lapNumber}>{props.laps.length + 1}</Text>
    </Text>
  </Party>
)

RunningParty.propTypes = {
  id: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  laps: PropTypes.array.isRequired,
  timer: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default RunningParty
