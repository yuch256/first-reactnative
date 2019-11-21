import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

export default class System_1 extends Component {
  handleClickNetworkCheck = () => {
    NetInfo.fetch().then(state => {
      ToastAndroid.show(
        `Connection type ${state.type}\nIs connected? ${state.isConnected}`,
        ToastAndroid.LONG)
    });
  }
  handleClickWIFIStatus = () => {
    NetInfo.fetch().then(state => {
      ToastAndroid.show(
        `WIFI ${state.type === 'wifi' ? '开启' : '关闭'}`,
        ToastAndroid.LONG)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handleClickNetworkCheck}
          style={styles.button}>
          <Text style={styles.buttonText}>网络检测</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleClickWIFIStatus}
          style={styles.button}>
          <Text style={styles.buttonText}>WIFI状态</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { }}
          style={styles.button}>
          <Text style={styles.buttonText}>打开WIFI</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'tomato',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  }
})
