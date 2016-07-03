import React from 'react'
import { StyleSheet, View } from 'react-native'
import Party from './Party'

const PartyList = (props) => {
  const parties = props.parties.map(party => (
    <Party
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

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: 'stretch'
  }
})

export default PartyList
