import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';

import NavigationUtil from "../navigator/NavigationUtil"

export default class Welcome extends Component {
  // 1.组件装载前
  constructor(props) {
    super(props)
    this.state = {}
  }
  // 2.组件装载阶段
  componentDidMount() {
    console.log('组件装载之后调用，只调用一次')
    // this.timer = setTimeout(() => {
    //   NavigationUtil.resetToSignPage({
    //     navigation: this.props.navigation
    //   })
    // }, 500);
    let nav = 'Sign'
    AsyncStorage.getItem('usr')
      .then(value => {
        this.timer = setTimeout(() => {
          value ? nav = 'Main' : null
          NavigationUtil.goPage({
            navigation: this.props.navigation
          }, nav)
        }, 500)
      })
  }
  // 3.组件的更新阶段（此阶段会根据props和state的改变不断循环）
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，
  如果相同则返回false阻止更新，可以优化性能`)
  }

  componentDidUpdate() { console.log('组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点') }
  // 4.组件的卸载阶段
  componentWillUnmount() {
    console.log('组件将要卸载时调用，一些事件监听和定时器需要在此时清除')
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={{ felx: 1, alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Text style={{ fontSize: 25, color: '#333' }}>Welcome to the app!</Text>
      </View>
    );
  }
}