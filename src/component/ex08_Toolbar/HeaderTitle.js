import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';

// 导航栏自定义标题
export default class HeaderTitle extends Component {
  render() {
    let { bigTitle, smallTitle } = this.props;
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <View>
          <Image
            source={require('../../asset/github.png')}
            style={{ width: 50, height: 50, marginLeft: 20 }}
          />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, color: '#333' }}>{bigTitle}</Text>
          <Text style={{ color: '#333' }}>{smallTitle}</Text>
        </View>
      </View>
    );
  }
}
