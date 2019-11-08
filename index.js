/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// console.ignoredYellowBox = [
//   'AsyncStorage has been extracted from react-native core',
// ]
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested inside plain',      // Control_2.js: FlatList
  'AsyncStorage has been extracted from react-native core',    // AsyncStorage will be removed
  'Slider has been extracted from react-native core',          // Slider will be removed
  // '',
]);
// console.disableYellowBox = true   // 关闭全部黄色警告，应用发布

AppRegistry.registerComponent(appName, () => App);
