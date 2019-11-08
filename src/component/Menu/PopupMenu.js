import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Text,
} from 'react-native';
import { Button } from 'native-base';
import Modal from "react-native-simple-modal";

export default class PopupMenu extends Component {
  render() {
    const color = [{ '红': 'red', '蓝': 'blue', '绿': 'green' }]
    const colorKey = Object.keys(color[0])
    const font = ['Roboto', 'sans-serif']
    return (
      <Modal
        open={this.props.ifPopupMenuOpen}
        modalDidClose={this.props.closePopupMuneModal}
        style={{ alignItems: "center" }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{ margin: 5 }}
            onPress={this.props.handleClickColorTitle}
          >
            <Text style={{ fontSize: 20 }}>颜色</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ display: this.props.ifColorOpen ? 'flex' : 'none' }}>
            {
              colorKey.map(key => {
                return (
                  <TouchableOpacity
                    style={{ margin: 5, alignItems: 'center' }}
                    key={key}
                    onPress={() => this.props.handleClickColor(color[0][key])}
                  >
                    <Text style={{ color: color[0][key] }}>{key}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 5 }}
            onPress={this.props.handleClickFontTitle}
          >
            <Text style={{ fontSize: 20 }}>字体</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ display: this.props.ifFontOpen ? 'flex' : 'none' }}>
            {
              font.map(key => {
                return (
                  <TouchableOpacity
                    style={{ margin: 5, alignItems: 'center' }}
                    key={key}
                    onPress={this.props.handleClickFont}
                  >
                    <Text>{key}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 5 }} onPress={this.props.closePopupMuneModal}>
            <Text>关闭</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  dropdownText: {
    borderColor: '#333',
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    height: 40,
    lineHeight: 40,
    backgroundColor: '#fff',
  },
})