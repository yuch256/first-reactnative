import React, { Component } from 'react';
import {
  Alert,
  Linking,
  Toast,
  View,
  AsyncStorage,
  Text,
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { Form, Item, Input, Label, Button, } from 'native-base';

import GStyle from '../../style/GlobalStyle'

class Activity_1 extends Component {
  state = {
    phone: null,
    usr: null,
    pwd: null,
    item: null,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      AsyncStorage.getItem('ex05_item')
        .then(item => this.setState({ item }))
    }
  }

  call = phone => {
    const url = `tel:${phone}`
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          return Alert.alert('提示', `您的设备不支持自动拨号，请手动拨打 ${phone}`, [
            { text: '确定' }
          ]);
        }
        return Linking.openURL(url);
      })
      .catch(err => Toast.info(`出错了：${err}`, 1.5));
  };

  autoDial = () => {
    this.state.phone ? this.call(this.state.phone) : Alert.alert('号码不能为空！')
  };

  render() {
    const { phone, usr, pwd, item } = this.state
    const { navigation } = this.props
    return (
      <View style={{ paddingBottom: 10 }}>
        <Form style={{ marginBottom: 20 }}>
          <Item floatingLabel>
            <Label>Telephone</Label>
            <Input
              value={phone}
              onChangeText={phone => this.setState({ phone })}
            />
          </Item>
        </Form>
        <Button
          block
          style={{ marginLeft: 10, marginRight: 10 }}
          onPress={this.autoDial}
        >
          <Text style={GStyle.text}>拨打电话</Text>
        </Button>
        <Form style={{ marginBottom: 50 }}>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input
              value={usr}
              onChangeText={usr => this.setState({ usr })}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              value={pwd}
              onChangeText={pwd => this.setState({ pwd })}
            />
          </Item>
        </Form>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <Button
            block
            style={{ marginLeft: 10, marginRight: 10 }}
            onPress={() => navigation.navigate('SubActivity_1', {
              usr: usr,
              pwd: pwd
            })}
          >
            <Text style={GStyle.text}>登录 1</Text>
          </Button>
          <Button
            onPress={() => AsyncStorage.getAllKeys()
              .then((ks) => {
                ks.forEach((k) => {
                  AsyncStorage.getItem(k)
                    .then((v) => console.log(k, v));
                });
              })}>
            <Text style={GStyle.text}>AsyncStorage</Text>
          </Button>
          <Button
            block
            style={{ marginLeft: 10, marginRight: 10 }}
            onPress={() => navigation.navigate('SubActivity_2')}
          >
            <Text style={GStyle.text}>登录 2</Text>
          </Button>
        </View>
        <View>
          <Text>你选中的Item是：{item}</Text>
        </View>
      </View>
    );
  }
}

export default withNavigationFocus(Activity_1);
