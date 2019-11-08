import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ifExpand: false,
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.setState({ ifExpand: !this.state.ifExpand })}>
          <Text style={styles.dropdownTitle}>{this.props.value}</Text>
          <Image
            source={require('../asset/dropdownImage.png')}
            style={styles.dropdownImage}
          />
        </TouchableOpacity>
        <View style={[styles.dropdownWrap, { display: this.state.ifExpand ? 'flex' : 'none' }]}>
          <View style={styles.dropdownTextBox}>
            <FlatList
              data={this.props.data}
              renderItem={({ item }) =>
                <Text
                  style={styles.dropdownText}
                  key={item.key}
                  onPress={() => {
                    this.props.handlePressValue(item.key, this.props.type)
                    this.setState({ ifExpand: false })
                  }}
                >{item.key}</Text>
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropdownTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 22,
  },
  dropdownImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 15,
    height: 15,
  },
  dropdownWrap: {
    position: 'relative',
  },
  dropdownTextBox: {
    position: 'absolute',
    width: '100%',
  },
  dropdownText: {
    borderColor: '#333',
    borderBottomWidth: 1,
    fontSize: 18,
    textAlign: 'center',
    height: 30,
    lineHeight: 30,
  },
})