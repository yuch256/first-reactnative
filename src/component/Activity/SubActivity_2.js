import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  AsyncStorage,
  StyleSheet,
  ToastAndroid,
} from 'react-native';

export default class SubActivity_2 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={[
            { key: 'Item1' },
            { key: 'Item2' },
            { key: 'Item3' },
            { key: 'Item4' },
          ]}
          renderItem={({ item }) =>
            <Text
              key={item.key}
              style={styles.flatListText}
              onPress={() => {
                AsyncStorage.setItem('ex05_item', item.key)
                ToastAndroid.show(item.key, ToastAndroid.SHORT)
              }}
            >{item.key}</Text>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flatListText: {
		paddingLeft: 10,
		fontSize: 22,
		height: 44,
		lineHeight: 44,
		borderBottomWidth: 1,
		borderColor: '#ccc',
		backgroundColor: '#eee',
	},
})