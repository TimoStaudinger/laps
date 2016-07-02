/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class laps extends Component {
  render() {
    return (
      <View style={styles.verticalContainer}>
        <View style={styles.horizontalContainer}>
          <View style={styles.item}>
            <Text style={styles.text}>
              Timer A
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>
              Timer B
            </Text>
          </View>
        </View>
        <View style={styles.horizontalContainer}>
          <View style={styles.item}>
            <Text style={styles.text}>
              Timer A
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>
              Timer B
            </Text>
          </View>
        </View>
        <View style={styles.horizontalContainer}>
          <View style={styles.item}>
            <Text style={styles.text}>
              Timer A
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>
              Timer B
            </Text>
          </View>
        </View>
        <View style={styles.horizontalContainer}>
          <View style={styles.item}>
            <Text style={styles.text}>
              Timer C
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>
              Timer D
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  horizontalContainer: {
    flexDirection: 'row',
    flex: 1
  },
  item: {
    flex: 1
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('laps', () => laps);
