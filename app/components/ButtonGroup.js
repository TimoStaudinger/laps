import React from 'react'
import { StyleSheet, View } from 'react-native'

const ButtonGroup = (props) => (
  <View style={styles.row}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 15
  }
})

export default ButtonGroup
