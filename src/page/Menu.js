import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'native-base'
import { createStackNavigator } from 'react-navigation-stack';

import OptionMenu from '../component/Menu/OptionMenu'
import PopupMenu from '../component/Menu/PopupMenu'
import RadioBtModal from '../component/Menu/RadioBtModal'
import ContextMenu from '../component/Menu/ContextMenu'
import HeaderRightMenu from '../component/HeaderRightMenu'

import GStyle from '../style/GlobalStyle'

class MyMenu extends Component {
  state = {
    // PopupMenu
    ifPopupMenuOpen: false,
    textViewColor: '#000',
    ifColorOpen: false,
    ifFontOpen: false,
    // RadioBtModal
    ifMRadioOpen: false,
    radioValue: null,
    // ContextMenu
    listViewData: [
      { key: '我喜欢', ifAdded: false },
      { key: '我讨厌', ifAdded: false },
      { key: '我不在乎', ifAdded: false },
    ],
    ifMContextOpen: false,
    onPressIndex: 0,
  }
  // PopupMenu
  openPopupMuneModal = () => this.setState({ ifPopupMenuOpen: true })
  closePopupMuneModal = () => this.setState({ ifPopupMenuOpen: false })
  handleClickColorTitle = () => this.setState({ ifColorOpen: !this.state.ifColorOpen })
  handleClickFontTitle = () => this.setState({ ifFontOpen: !this.state.ifFontOpen })
  handleClickColor = (color) => this.setState({
    ifPopupMenuOpen: false,
    ifColorOpen: false,
    ifFontOpen: false,
    textViewColor: color,
  })
  handleClickFont = () => this.setState({
    ifPopupMenuOpen: false,
    ifFontOpen: false,
    ifColorOpen: false,
  })
  // RadioBtModal
  openRadioBtModal = () => this.setState({ ifMRadioOpen: true })
  closeRadioBtModal = () => this.setState({ ifMRadioOpen: false })
  handleClickRadioBt = (radioValue) => this.setState({
    ifMRadioOpen: false,
    radioValue: radioValue,
  })
  // ContextMenu
  openContMenuModal = () => this.setState({ ifMContextOpen: true })
  closeContMenuModal = () => this.setState({ ifMContextOpen: false })
  listViewDataAdd = (color) => {
    let listViewData = this.state.listViewData
    const onPressIndex = this.state.onPressIndex
    if (listViewData[onPressIndex].ifAdded) return
    listViewData[onPressIndex].key += color
    listViewData[onPressIndex].ifAdded = true
    this.setState({ listViewData })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 5 }}></View>
        <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
          <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: this.state.textViewColor, fontSize: 25 }}>TextView</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Button
              block
              style={{ marginBottom: 10 }}
              onPress={() => this.openPopupMuneModal()}>
              <Text style={GStyle.text}>按钮1</Text>
            </Button>
            <Button
              block
              style={{ marginBottom: 10 }}
              onPress={() => this.openRadioBtModal()}
            >
              <Text style={GStyle.text}>按钮2</Text>
            </Button>
            {
              this.state.listViewData.map((value, index) => {
                return (
                  <Text
                    key={value.key}
                    style={styles.item}
                    onLongPress={() => {
                      this.openContMenuModal()
                      this.setState({ onPressIndex: index })
                    }}>
                    {value.key}
                  </Text>
                )
              })
            }
          </View>
          <ContextMenu />
        </ScrollView>

        <PopupMenu
          ifPopupMenuOpen={this.state.ifPopupMenuOpen}
          ifColorOpen={this.state.ifColorOpen}
          ifFontOpen={this.state.ifFontOpen}
          handleClickColorTitle={this.handleClickColorTitle}
          handleClickFontTitle={this.handleClickFontTitle}
          handleClickColor={this.handleClickColor}
          handleClickFont={this.handleClickFont}
          closePopupMuneModal={this.closePopupMuneModal}
        />
        <RadioBtModal
          ifMRadioOpen={this.state.ifMRadioOpen}
          radioValue={this.state.radioValue}
          handleClickRadioBt={this.handleClickRadioBt}
          closeRadioBtModal={this.closeRadioBtModal}
        />
        <ContextMenu
          ifMContextOpen={this.state.ifMContextOpen}
          listViewDataAdd={this.listViewDataAdd}
          closeContMenuModal={this.closeContMenuModal}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default MenuPage = createStackNavigator({
  MenuPage: {
    screen: MyMenu,
    navigationOptions: ({ navigation }) => ({
      title: '实习6  Menu',
      headerRight: (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <OptionMenu />
          <HeaderRightMenu navigation={navigation} />
        </View>
      )
    })
  }
})