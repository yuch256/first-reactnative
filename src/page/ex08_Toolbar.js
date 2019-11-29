import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../component/HeaderRightMenu'

import Toolbar_1 from '../component/ex08_Toolbar/Toolbar_1'
import SubToolbar_1 from '../component/ex08_Toolbar/SubToolbar_1'
import OptionMenu from '../component/Menu/OptionMenu'
import HeaderTitle from '../component/ex08_Toolbar/HeaderTitle'

class MyToolbar extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <Toolbar_1 />
        </ScrollView>
      </View>
    );
  }
}

export default Toolbar = createAppContainer(createStackNavigator({
  Toolbar: {
    screen: MyToolbar,
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => <HeaderTitle bigTitle='大标题' smallTitle='小标题' />,
      headerRight: (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate('SubToolbar_1')}>
            <Image
              source={require('../asset/fangdj.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <OptionMenu />
          <HeaderRightMenu navigation={navigation} />
        </View>
      ),
      gesturesEnabled: true,      // 据说这样可以滑动翻页，但好像没有效果
    })
  },
  SubToolbar_1: {
    screen: SubToolbar_1,
    navigationOptions: () => ({
      headerTitle: () => <HeaderTitle bigTitle='大标题' smallTitle='小标题' />,
    })
  }
}));
