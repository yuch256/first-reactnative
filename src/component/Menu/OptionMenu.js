import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ToastAndroid,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Icon, Text, } from 'native-base'
// react-native-popover-menu
// TODO 点击列表外的空白地方使modal关闭

export default class OptionMenu extends Component {
  state = {
    opationMenuData: [
      { key: 'Option1' },
      { key: 'Option2' },
      { key: 'Option3' },
      { key: 'Option4' },
      { key: 'Option5' },
      { key: 'Option6' },
      { key: 'Option7' },
    ],
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { opationMenuData, modalVisible } = this.state
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <TouchableWithoutFeedback>
            <TouchableOpacity style={{ position: 'absolute', right: 0, top: 56, width: 150 }}>
              <View style={styles.dropdownWrap}>
                {
                  opationMenuData.map((value, index) => {
                    return (
                      <TouchableOpacity
                        style={{ borderColor: '#333', borderBottomWidth: 1 }}
                        key={index}
                      >
                        <Image
                          source={require('../../asset/github.png')}
                          style={styles.dropdownImage}
                        />
                        <Text
                          style={styles.dropdownText}
                          onPress={() => {
                            this.setModalVisible(!modalVisible)
                            ToastAndroid.show(value.key, ToastAndroid.SHORT)
                          }}
                        >{value.key}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            </TouchableOpacity>
          </TouchableWithoutFeedback>
        </Modal>

        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <Icon
            name='more'
            style={{ fontSize: 40, marginRight: 20, color: '#f60' }} />
        </TouchableOpacity>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  dropdownWrap: {
    borderColor: '#333',
    borderTopWidth: 1,
  },
  dropdownImage: {
    position: 'absolute',
    left: 8,
    top: 9.5,
    width: 22,
    height: 22,
    zIndex: 99,
  },
  dropdownText: {
    borderColor: '#333',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    height: 40,
    lineHeight: 40,
    backgroundColor: '#fff',
  },
})