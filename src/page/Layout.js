import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../component/HeaderRightMenu'

import Layout_1 from '../component/Layout/Layout_1'
import Layout_2 from '../component/Layout/Layout_2'
import Layout_3 from '../component/Layout/Layout_3'

class MyLayout extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
          <View style={{padding: 5}}></View>
          <Layout_1 />
          <Layout_2 />
          <Layout_3 />
        </ScrollView>
      </View>
    );
  }
}

export default Layout = createStackNavigator({
  Layout: {
    screen: MyLayout,
    navigationOptions: ({ navigation }) => ({
      title: '实习2  Layout',
      headerRight: (
        <HeaderRightMenu navigation={navigation} />
      )
    })
  }
})