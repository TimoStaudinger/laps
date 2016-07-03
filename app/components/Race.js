import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import Timer from './Timer'
import PartyList from './PartyList'
import ButtonGroup from './ButtonGroup'
import Button from './Button'

class Race extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timer: 0,
      parties: []
    }
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => this.setState({
      timer: this.getTimer(),
      parties: this.getParties()
    }), 125)
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }

  getTimer() {
    return Date.now() - this.props.timer
  }

  getParties() {
    return this.props.parties.map(party => (
      {...party, timer: Date.now() - party.lastLap}
    ))
  }

  render() {
    return (
      <View style={styles.verticalContainer}>
        <Timer>{this.state.timer}</Timer>

        <PartyList
          parties={this.state.parties}
          onCompleteLap={this.props.completeLap}
        />

        <ButtonGroup>
          <Button onPress={this.props.cancelRace}>Cancel</Button>
        </ButtonGroup>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  itemRow: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: '#C5E1A5'
  },
  smallItem: {
    flex: 0.5
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default Race
