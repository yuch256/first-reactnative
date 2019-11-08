import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class SubActivity_1 extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>{`usr: ${navigation.state.params.usr}`}</Text>
        <Text>{`pwd: ${navigation.state.params.pwd}`}</Text>
      </View>
    )
  }
}