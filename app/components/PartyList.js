import React, {PropTypes} from 'react'
import {StyleSheet, View} from 'react-native'
import Party from './Party'

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: 'stretch'
  }
})

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

PartyList.propTypes = {
  parties: PropTypes.array.isRequired,
  onCompleteLap: PropTypes.func.isRequired
}

export default PartyList
