/* eslint new-cap:["error",{"capIsNewExceptions":["SelectableBackgroundBorderless"]}]*/

import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native'
import InlineTimer from './InlineTimer'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#C5E1A5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    margin: 10
  },
  lapText: {
    flex: 0.7,
    fontSize: 15,
    textAlign: 'center',
    margin: 10
  },
  lapNumber: {
    fontSize: 25
  }
})

const Party = (props) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
    onPress={() => props.onCompleteLap(props.id)}
  >
    <View
      style={[styles.item, {backgroundColor: props.secondaryColor}]}
    >
      <Text style={[styles.text, {color: props.primaryColor}]}>
        {props.name}
      </Text>
      <Text style={[styles.lapText, {color: props.primaryColor}]}>
        Lap <Text style={styles.lapNumber}>{props.laps.length + 1}</Text>
      </Text>
      <InlineTimer timer={props.timer} color={props.primaryColor} />
    </View>
  </TouchableNativeFeedback>
)

Party.propTypes = {
  id: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  laps: PropTypes.array.isRequired,
  timer: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Party
