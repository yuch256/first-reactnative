import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import MultiThread from '../component/Async/MultiThread'
import HeaderRightMenu from '../component/HeaderRightMenu'

class MyAsync extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 5 }}></View>
        <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
          <MultiThread />
        </ScrollView>
      </View>
    );
  }
}

export default Async = createStackNavigator({
  Async: {
    screen: MyAsync,
    navigationOptions: ({ navigation }) => ({
      title: '实习7  Async',
      headerRight: (
        <HeaderRightMenu navigation={navigation} />
      )
    })
  }
})