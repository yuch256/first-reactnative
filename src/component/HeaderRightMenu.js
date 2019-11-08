import React, { Component } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';

import GStyle from '../style/GlobalStyle'

export default class HeaderRightMenu extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon name='menu' style={GStyle.headerRightMenuIcon} />
      </TouchableOpacity>
    );
  }
}