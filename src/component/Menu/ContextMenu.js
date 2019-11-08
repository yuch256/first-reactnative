import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Modal from "react-native-simple-modal";

export default class ContextMenu extends Component {
  state = {
    data: [
      { key: '我喜欢' },
      { key: '我讨厌' },
      { key: '我不在乎' },
    ],
  }
  render() {
    const color = ['红色', '蓝色', '绿色']
    return (
      <Modal
        open={this.props.ifMContextOpen}
        modalDidClose={this.closeContMenuModal}
      >
        {
          color.map(value => {
            return (
              <TouchableOpacity
                key={value}
                onPress={() => {
                  this.props.listViewDataAdd(value)
                  this.props.closeContMenuModal()
                }}>
                <Text style={styles.item}>{value}</Text>
              </TouchableOpacity>
            )
          })
        }
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})