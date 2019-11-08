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

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  }
})

const SignNavigator = createStackNavigator({
  SignUpPage: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up'
    }
  },
})

const MyDrawerNavigator = createDrawerNavigator({
  '首页': Home,
  '实习2  Layout': Layout,
  '实习3  Control': Control,
  '实习4  Dialog': Dialog,
  '实习5  Activity': Activity,
  '实习6  Menu': MenuPage,
  '实习7  Async': Async,
  '个人中心': SignOut
}, {
  // initialRouteName: '实习7  Async',
  initialRouteName: '首页',
  drawerPosition: 'left',
  drawerType: 'front',
  hideStatusBar: true,
})
const MyApp = createAppContainer(MyDrawerNavigator)

export default AppNavigator = createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Sign: SignNavigator,
  Main: MyApp,
}, {
  initialRouteName: 'Init',
}));