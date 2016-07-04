import React from 'react'
import { StyleSheet, Text, View, ToolbarAndroid, BackAndroid } from 'react-native'
import Timer from './Timer'
import PartyList from './PartyList'
import ButtonGroup from './ButtonGroup'
import Button from './Button'
import { APP as ColorScheme } from '../tools/ColorScheme'

function msToTime(duration) {
  duration = +duration
  let milliseconds = parseInt((duration % 1000))
  let seconds = parseInt((duration / 1000) % 60)
  let minutes = parseInt((duration/(1000 * 60)) % 60)
  let hours = parseInt((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds
  milliseconds = (milliseconds < 10) ? "00" + milliseconds :
                 (milliseconds < 100) ? '0' + milliseconds : milliseconds

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds
}

class Race extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timer: 0,
      parties: []
    }

    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.props.cancelRace()
      return true
    })
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      if(this.props.isRace) {
        this.setState({
          timer: this.getTimer(),
          parties: this.getParties()
        })
      }
    }, 125)
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
    const toolbarActions = [
      {title: 'Complete race', icon: require('../assets/ic_done_white_48dp.png'), show: 'always'},
      {title: 'Cancel race', icon: require('../assets/ic_clear_white_48dp.png')}
    ]

    const onActionSelected = (position) => {
      if (position === 0) { // Complete race
        // TODO
      } else if(position === 1) { // Cancel Race
        this.props.cancelRace()
      }
    }

    return (
      <View style={styles.verticalContainer}>
        <ToolbarAndroid
          style={styles.toolbar}
          titleColor={ColorScheme.fontColor}
          title={msToTime(this.state.timer)}
          actions={toolbarActions}
          onActionSelected={onActionSelected}
        />

        <PartyList
          parties={this.state.parties}
          onCompleteLap={this.props.completeLap}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
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
  },
  toolbar: {
    height: 54,
    backgroundColor: ColorScheme.primaryColor
  }
})

export default Race
