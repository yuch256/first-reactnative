import React from 'react';

import AppNavigator from './src/navigator/AppNavigator'
// when start a expo app
// set REACT_NATIVE_PACKAGER_HOSTNAME=192.168.3.110

// when app is fu** cannot work but some time ago is working well??!
// taskkill /f /im node.exe
// npm start --reset-cache
// (另起一个终端)react-native run-android

export default function App() {
  return (
    <AppNavigator />
  );
}