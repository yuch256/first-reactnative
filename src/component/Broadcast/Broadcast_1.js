import React, { Component } from 'react';
import {
  View,
  Button,
  DeviceEventEmitter,
  TextInput,
  Text,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import NetInfo from "@react-native-community/netinfo";

export default class Broadcast_1 extends Component {
  state = {
    textInput: null,
    broadText: [],
    wifi: true,
  }

  componentDidMount() {
    this.deEmitter = DeviceEventEmitter.addListener('left', (a) => {
      alert('收到通知：' + a);
      let broadText = this.state.broadText
      broadText.push(a)
      this.setState({ broadText })
    });

    DeviceInfo.getPowerState().then(state => {
      let broadText = this.state.broadText
      let batteryLevel = state.batteryLevel * 100
      broadText.push(`手机电量：${batteryLevel}%`)
      broadText.push(`是否插入电源：${state.batteryState}`)
      broadText.push(`是否低功耗模式：${state.lowPowerMode}`)
      this.setState({ broadText })
    });
  }

  componentWillUnmount() {
    this.deEmitter.remove();
  }

  handleClickBtn = () => {
    NetInfo.fetch().then(state => {
      let wifi = this.state.wifi;
      console.log(wifi, state.type)
      let broadText = this.state.broadText;
      if (wifi && state.type !== 'wifi') {
        wifi = false
        broadText.push('WIFI关闭')
        this.setState({ broadText, wifi })
      } else if (!wifi && state.type === 'wifi') {
        wifi = true
        broadText.push('WIFI开启')
        this.setState({ broadText, wifi })
      }
    })
  }

  render() {
    return (
      <View style={{ marginVertical: 10 }}>
        <TextInput
          placeholder="subject"
          value={this.state.textInput}
          onChangeText={textInput => this.setState({ textInput })}
        />
        <Button title="发送通知" onPress={() => {
          DeviceEventEmitter.emit('left', this.state.textInput);
        }} />
        {
          this.state.broadText.map((v, k) => {
            return <Text key={k}>{v}</Text>
          })
        }
        <Button
          title='CHECK WIFI'
          onPress={this.handleClickBtn}
        />
      </View>
    );
  }
}