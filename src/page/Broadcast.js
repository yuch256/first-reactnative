import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../component/HeaderRightMenu'

import Broadcast_1 from '../component/Broadcast/Broadcast_1'

class MyBroadcast extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <Broadcast_1 />
        </ScrollView>
      </View>
    );
  }
}

export default Broadcast = createStackNavigator({
  Broadcast: {
    screen: MyBroadcast,
    navigationOptions: ({ navigation }) => ({
      title: '实习10  System',
      headerRight: (
        <HeaderRightMenu navigation={navigation} />
      )
    })
  }
})

