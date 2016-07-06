import React, {PropTypes} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import RunningParty from './RunningParty'

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: 'stretch'
  }
})

const PartyList = (props) => {
  const parties = props.parties.map(party => (
    party.isFinished ?
      <Text>Finished</Text> :
      <RunningParty
        key={party.id}
        onCompleteLap={props.onCompleteLap}
        {...party}
      />
  ))

  return (
    <View style={styles.row}>
      {parties}
    </View>
  )
}

PartyList.propTypes = {
  parties: PropTypes.array.isRequired,
  onCompleteLap: PropTypes.func.isRequired
}

export default PartyList
