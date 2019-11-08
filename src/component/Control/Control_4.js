import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Control_4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ifLightOn: 'on',
    }
    this.ImageModule = {
      on:  require('../../asset/lightOn.png'),
      off: require('../../asset/lightOff.png'),
    }
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.viewLayout}
        onPress={() => this.setState({ifLightOn: this.state.ifLightOn === 'on' ? 'off' : 'on'})}>
        <Image source={this.ImageModule[this.state.ifLightOn]} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
	viewLayout: {
    flex: 1,
    alignItems: 'center',
		marginBottom: 10,
  },
})