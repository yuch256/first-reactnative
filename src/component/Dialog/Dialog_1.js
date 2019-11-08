import React, { Component } from 'react';
import {
  View,
  ToastAndroid,           //react-native-easy-toast
  StyleSheet,
  Alert,
  Button,
} from 'react-native';

export default class Dialog_1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkboxList: [1, 3, 4]
    }
  }
  render() {
    return (
      <View style={styles.viewLayout}>
        <View style={styles.alertButton}>
          <Button
            title='简单Alert'
            onPress={() => {
              Alert.alert(
                '这是一个简单Alert',
                '请点击帮助',
                [
                  { text: '确定' },
                  {
                    text: '帮助', onPress: () => { ToastAndroid.show('我需要帮助', ToastAndroid.SHORT) }
                  },
                  { text: '取消' },
                ],
                { cancelable: false }
              )
            }}
          />
        </View>
        <View style={styles.alertButton}>
          <Button
            title='复杂Alert'
            onPress={() => {
              Alert.alert(
                '这是一个复杂Alert',
                '请任意点击以下复选框',
                [
                  { text: '数学', onPress: () => { ToastAndroid.show('你选择了数学', ToastAndroid.SHORT) } },
                  { text: '英语', onPress: () => { ToastAndroid.show('你选择了英语', ToastAndroid.SHORT) } },
                  { text: '物理', onPress: () => { ToastAndroid.show('你选择了物理', ToastAndroid.SHORT) } },
                ]
              )
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewLayout: {
    flex: 1,
    marginBottom: 10,
  },
  alertButton: {
    marginBottom: 10,
  }
})