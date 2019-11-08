import React, { Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../component/HeaderRightMenu'

import Dialog_1 from '../component/Dialog/Dialog_1'
import Dialog_2 from '../component/Dialog/Dialog_2'
import Dialog_3 from '../component/Dialog/Dialog_3'

class MyDialog extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
          <View style={{ padding: 5 }}></View>
          <Dialog_1 />
          <Dialog_2 />
          <Dialog_3 />
        </ScrollView>
      </View>
    );
  }
}

export default Dialog = createStackNavigator({
  Dialog: {
    screen: MyDialog,
    navigationOptions: ({ navigation }) => ({
      title: '实习4  Dialog',
      headerRight: (
        <HeaderRightMenu navigation={navigation} />
      )
    })
  }
})