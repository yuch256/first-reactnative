import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  DatePickerAndroid,
  TimePickerAndroid,
  Button,
  ToastAndroid,
} from 'react-native';
// import AnalogClock from 'react-native-analog-clock';
// import AnalogClock from 'react-native-clock-analog';
// import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import DititalClock from '../DigitalClock'

export default class Dialog_2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.viewLayout}>
        <View style={styles.pickerButton}>
          <Button
            title='DatePicker'
            onPress={() => {
              const { action } = DatePickerAndroid.open({
                date: new Date()
              }).then(({ year, month, day }) => {
                if (action !== DatePickerAndroid.dismissedAction) {
                  ToastAndroid.show(`${year}-${month}-${day}`, ToastAndroid.SHORT)
                }
              })
            }}
          />
        </View>
        <View style={styles.pickerButton}>
          <Button
            title='TimePicker'
            onPress={() => {
              const { action } = TimePickerAndroid.open({
                is24Hour: true,
              }).then(({ hour, minute }) => {
                if (action !== TimePickerAndroid.dismissedAction) {
                  ToastAndroid.show(`${hour}:${minute}`, ToastAndroid.SHORT)
                }
              })
            }}
          />
        </View>
        <View style={styles.ditialClockView}>
          <DititalClock />
        </View>
        <View style={styles.analogClockView}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewLayout: {
    flex: 1,
    marginBottom: 10,
  },
  pickerButton: {
    marginBottom: 10,
  },
  ditialClockView: {
    marginTop: 10,
    marginBottom: 10,
  },
  analogClockView: {
    display: 'flex',
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
})