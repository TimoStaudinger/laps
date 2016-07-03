import React from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native'

const Button = (props) => (
  <View style={styles.item}>
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackground()}
      onPress={props.onPress}
    >
      <View style={styles.button}>
        <Text style={styles.text}>
          {props.children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  </View>
)

const styles = StyleSheet.create({
  item: {
    flex: 1
  },
  button: {
    borderWidth: 0,
    backgroundColor: '#8BC34A',
    height: 44,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
  }
})

export default Button
