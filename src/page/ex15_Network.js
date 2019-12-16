import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Item, Input, Label } from 'native-base';

import HeaderRightMenu from '../component/HeaderRightMenu'

class MyNetwork extends Component {
  state = {
    curcityid: '101010100',
    inputcityid: null,
    res1: null,

    curcity: '杭州',
    res2: null,
    cityList: ['北京', '南京', '杭州'],

    personinfoList: [],
  };

  componentDidMount() {
    this.personinfoFetch()
    this.weatherCityFetch(this.state.curcityid)
    this.wthrcdnCityFetch(this.state.curcity)
  }

  handleChangeInputCityId = text => this.setState({ inputcityid: text })

  handleClickInputCityIdBtn = () => {
    let inputcityid = this.state.inputcityid
    if (!inputcityid) return alert('城市代码不能为空')
    if (citymap.has(inputcityid)) inputcityid = citymap.get(inputcityid)    // 不会进入if的，因为我发现这键盘不能输出中文。。。
    this.setState({ curcityid: this.state.inputcityid })
    this.weatherCityFetch(this.state.inputcityid)
  }

  handleClickCityBtn = curcity => {
    this.setState({ curcity })
    this.wthrcdnCityFetch(curcity)
  }

  weatherCityFetch = async curcityid => {
    try {
      let res1 = await fetch(`http://www.weather.com.cn/data/sk/${curcityid}.html`);
      let resJson1 = await res1.json();
      this.setState({ res1: resJson1 });
    } catch (err) {
      console.log(err);
      alert('请求失败，请检查城市代码是否存在')
      this.setState({ res1: null })
    }
  }

  wthrcdnCityFetch = async curcity => {
    try {
      let res2 = await fetch(`http://wthrcdn.etouch.cn/weather_mini?city=${curcity}`);
      let resJson2 = await res2.json();
      this.setState({ res2: resJson2 });
    } catch (err) { console.log(err); }
  }

  personinfoFetch = () => {
    fetch('http://47.106.124.118:11111/info', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(resJson => {
        // TODO render会执行四次，可能是重复渲染的问题，前三次里面console出来的值都为0，最后一次才是正确的，
        // TODO 为了不报undefined错误，这里只取了一个base64值，待解决
        // TODO 。。。前三次console好像也不一定都是0
        this.setState({ personinfoList: JSON.parse(resJson.info)[0].imageBase64 })
      })
      .catch(err => console.log(err));
  }

  render() {
    let { res1, res2, curcity, curcityid, inputcityid, personinfoList } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {console.log(personinfoList.length)}
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <View style={styles.reqView}>
            <CityIdInput inputcityid={inputcityid} onChange={this.handleChangeInputCityId} onClick={this.handleClickInputCityIdBtn} />
            <Text>{`http://www.weather.com.cn/data/sk/${curcityid}.html:`}</Text>
            <Text>{JSON.stringify(res1, null, 4)}</Text>
          </View>
          <View style={styles.reqView}>
            <CityBtnList list={this.state.cityList} onClick={this.handleClickCityBtn} />
            <Text>{`http://wthrcdn.etouch.cn/weather_mini?city=${curcity}:`}</Text>
            <Text>{JSON.stringify(res2, null, 4)}</Text>
          </View>
          <Image
            style={{ width: 125, height: 125 }}
            source={{ uri: `data:image/png;base64,${personinfoList}` }}
          />
        </ScrollView>
      </View >
    );
  }
}

function CityBtnList(props) {
  return (
    <View style={styles.rowView}>
      {
        props.list.map(value => {
          return <Button
            title={value}
            key={value}
            onPress={() => props.onClick(value)}
          />
        })
      }
    </View>
  );
}

function CityIdInput(props) {
  return (
    <View style={styles.IdInputView}>
      <Item floatingLabel>
        <Label>请输入城市代码</Label>
        <Input
          value={props.inputcityid}
          onChangeText={(text) => props.onChange(text)}
        />
      </Item>
      <Button title='点击查询' onPress={() => props.onClick()} />
    </View>
  )
}

const styles = StyleSheet.create({
  reqView: {
    marginBottom: 10,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  IdInputView: {
    paddingTop: 15
  }
});

// https://www.iteye.com/blog/vyphn-850431
const citymap = new Map([
  ['北京', '101010100'],
  ['杭州', '101210101'],
  ['南京', '101190101']
]);

export default Network = createStackNavigator({
  Network: {
    screen: MyNetwork,
    navigationOptions: ({ navigation }) => ({
      title: '实习15  Network',
      headerRight: (
        <HeaderRightMenu navigation={navigation} />
      )
    }),
  }
});
