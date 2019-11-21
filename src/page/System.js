import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../component/HeaderRightMenu'

import System_1 from '../component/System/System_1'

class MySystem extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
          <System_1 />
        </ScrollView>
      </View>
    );
  }
}

export default System = createStackNavigator({
  System: {
    screen: MySystem,
    navigationOptions: ({ navigation }) => ({
      title: '实习10  System',
      headerRight: (
        <HeaderRightMenu navigation={navigation} />
      )
    })
  }
})
