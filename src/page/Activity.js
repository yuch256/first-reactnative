import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../component/HeaderRightMenu'

import Activity_1 from '../component/Activity/Activity_1'
import SubActivity_1 from '../component/Activity/SubActivity_1'
import SubActivity_2 from '../component/Activity/SubActivity_2'

class MyActivity extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Activity_1 navigation={this.props.navigation} />
        </ScrollView>
      </View>
    )
  }
}

export default Activity = createAppContainer(createStackNavigator({
  Activity: {
    screen: MyActivity,
    navigationOptions: ({ navigation }) => ({
      title: '实习5  Activity',
      headerRight: (
        <HeaderRightMenu navigation={navigation} />
      ),
    })
  },
  SubActivity_1: {
    screen: SubActivity_1,
    navigationOptions: () => ({
      title: '实习5 >> 登录1'
    })
  },
  SubActivity_2: {
    screen: SubActivity_2,
    navigationOptions: () => ({
      title: '实习5 >> 登录2'
    })
  }
}, {
  initialRouteName: 'Activity'
}))