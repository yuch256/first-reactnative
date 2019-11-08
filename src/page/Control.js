import React, { Component } from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../component/HeaderRightMenu'

import Control_1 from '../component/Control/Control_1'
import Control_2 from '../component/Control/Control_2'
import Control_3 from '../component/Control/Control_3'
import Control_4 from '../component/Control/Control_4'

class MyControl extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
          <View style={{ padding: 5 }}></View>
          <Control_1 />
          <Control_2 />
          <Control_3 />
          <Control_4 />
        </ScrollView>
      </View>
    );
  }
}

export default Control = createStackNavigator({
  aControl: {
    screen: MyControl,
    navigationOptions: ({ navigation }) => ({
      title: '实习3  Control',
      headerRight: (
        <HeaderRightMenu navigation={navigation} />
      )
    })
  }
})