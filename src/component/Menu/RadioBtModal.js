import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from "react-native-simple-modal";

export default class RadioBtModal extends Component {
  render() {
    const radioValue = ['Traffic', 'Map', 'Satellite']
    return (
      <Modal
        open={this.props.ifMRadioOpen}
        modalDidClose={this.props.closeRadioBtModal}
        style={{ alignItems: "center" }}
      >
        <View style={{ alignItems: "center", justifyContent: 'center' }}>
          {
            radioValue.map(value => {
              return (
                <TouchableOpacity
                  key={value}
                  style={{ flexDirection: 'row', height: 50, width: '100%', alignItems: 'center' }}
                  onPress={() => this.props.handleClickRadioBt(value)}>
                  <View>
                    <Text>{value}</Text>
                  </View>
                  <TouchableOpacity style={styles.radioWrap}>
                    <View
                      style={[
                        styles.radioButton,
                        { backgroundColor: this.props.radioValue === value ? '#000' : '#fff' }
                      ]}
                    ></View>
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  radioWrap: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    width: 20,
    height: 20,
    marginRight: 8,
  },
  radioButton: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    width: 13,
    height: 13,
  },
})