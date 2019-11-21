import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from "react-native-sensors";

export default class App extends Component {
  state = { x: 0, y: 0, z: 0, }

  componentDidMount() {
    setUpdateIntervalForType(SensorTypes.accelerometer, 400);
    const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) => {
      // console.log({ x, y, z })
      this.setState({x, y, z})
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          加速度值
        </Text>
        <Value name="x" value={this.state.x} />
        <Value name="y" value={this.state.y} />
        <Value name="z" value={this.state.z} />
      </View>
    );
  }
}

const Value = ({ name, value }) => (
  <View style={styles.valueContainer}>
    <Text style={styles.valueName}>{name}:</Text>
    <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headline: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  valueValue: {
    width: 200,
    fontSize: 20
  },
  valueName: {
    width: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
