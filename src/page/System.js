import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../component/HeaderRightMenu'

import System_1 from '../component/System/System_1'
import Sensors from '../component/System/Sensors'
import Camera from '../component/System/Camera'

class MySystem extends Component {
  state = {
    part: 1
  }
  handleClickGoTo = (part = 0) => {
    this.setState({ part })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.part === 1 ?
            <ScrollView style={{ paddingHorizontal: 10 }}>
              <TouchableOpacity
                onPress={this.handleClickGoTo}
                style={{ alignItems: 'center' }}>
                <Text>GoTo Camera</Text>
              </TouchableOpacity>
              <System_1 />
              <Sensors />
            </ScrollView> :
            <Camera />
        }
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
