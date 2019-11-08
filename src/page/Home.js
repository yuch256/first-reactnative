import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  AsyncStorage,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../component/HeaderRightMenu'

class MyHome extends Component {
  state = {
    usr: 'please sign up!'
  }
  componentDidMount() {
    AsyncStorage.getItem('usr')
      .then(usr => this.setState({ usr }))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontStyle: 'italic' }}>Hello, {this.state.usr}</Text>
        <Text style={{ fontSize: 20 }}>点击右上角图标打开侧栏</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: StatusBar.currentHeight,
  },
})

export default Home = createStackNavigator({
  Home: {
    screen: MyHome,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerRight: (
        <HeaderRightMenu navigation={navigation} />
      ),
    })
  }
})