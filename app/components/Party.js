import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import InlineTimer from './InlineTimer'

const Party = (props) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.SelectableBackground()}
    onPress={() => props.onCompleteLap(props.id)}
  >
    <View
      style={[styles.item, {backgroundColor: props.secondaryColor}]}
    >
      <Text style={[styles.text, {color: props.primaryColor}]}>
        {props.name}
      </Text>
      <Text style={[styles.roundText, {color: props.primaryColor}]}>
        Round <Text style={styles.roundNumber}>{props.laps.length + 1}</Text>
      </Text>
      <InlineTimer timer={props.timer} color={props.primaryColor} />
    </View>
  </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#C5E1A5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    margin: 10
  },
  roundText: {
    flex: .7,
    fontSize: 15,
    textAlign: 'center',
    margin: 10
  },
  roundNumber: {
    fontSize: 25
  }
})

export default Party
