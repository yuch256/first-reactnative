import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button, Item, Label, Input } from 'native-base';
// import RNFetchBlob from 'rn-fetch-blob';
// import RNFetchBlob from 'react-native-fetch-blob';

import GStyle from '../../style/GlobalStyle'

export default class MultiThread extends Component {
  state = {
    firstBt: 0,
    secBt: 0,
  }

  // componentDidMount() {
  //   RNFetchBlob
  //     .config({
  //       fileCache: true,
  //       // by adding this option, the temp files will have a file extension
  //       appendExt: 'jpg'
  //     })
  //     .fetch('GET', 'https://images.freeimages.com/images/large-previews/e2a/boise-downtown-1387405.jpg', {
  //       //some headers ..
  //     })
  //     .then((res) => {
  //       // the temp file path with file extension `png`
  //       console.log('The file saved to ', res.path())
  //       // Beware that when using a file path as Image source on Android,
  //       // you must prepend "file://"" before the file path
  //       // imageView = <Image source={{ uri: Platform.OS === 'android' ? 'file://' + res.path() : '' + res.path() }} />
  //     })
  // }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
          <Button
            block
            onPress={this.handleClickFirstBt}
          ><Text style={GStyle.text}>单线程</Text></Button>
          <Button
            block
            onPress={this.handleClickSecBt}
          ><Text style={GStyle.text}>多线程</Text></Button>
          <Button
            block
          ><Text style={GStyle.text}>结束线程</Text></Button>
        </View>
        <View>
          <Item floatingLabel>
            <Label>Input</Label>
            <Input />
          </Item>
        </View>
      </View>
    );
  }
}