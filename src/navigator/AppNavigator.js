import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Welcome from '../page/Welcome'
import SignUp from '../page/SignUp'
import SignOut from '../page/SignOut'
import Home from '../page/Home'
import Layout from '../page/Layout'
import Control from '../page/Control'
import Dialog from '../page/Dialog'
import Activity from '../page/Activity'
import MenuPage from '../page/Menu'
import Async from '../page/Async'
import Toolbar from '../page/ex08_Toolbar'
import System from '../page/System'
import Broadcast from '../page/Broadcast'

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  }
});

const SignNavigator = createStackNavigator({
  SignUpPage: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up'
    }
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  '首页': Home,
  '实习02  Layout': Layout,
  '实习03  Control': Control,
  '实习04  Dialog': Dialog,
  '实习05  Activity': Activity,
  '实习06  Menu': MenuPage,
  '实习07  Async': Async,
  '实习08  Toolbar': Toolbar,
  '实习10  System': System,
  '实习11  Broadcast': Broadcast,
  '个人中心': SignOut
}, {
  initialRouteName: '实习08  Toolbar',
  // initialRouteName: '首页',
  drawerPosition: 'left',
  drawerType: 'front',
  hideStatusBar: true,
});
const MyApp = createAppContainer(MyDrawerNavigator);

export default AppNavigator = createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Sign: SignNavigator,
  Main: MyApp,
}, {
  initialRouteName: 'Init',
}));
