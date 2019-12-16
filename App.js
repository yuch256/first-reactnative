import React from 'react';

import AppNavigator from './src/navigator/AppNavigator';
// 1
// when start a expo app
// set REACT_NATIVE_PACKAGER_HOSTNAME=192.168.3.110

// 2
// when app is fu** cannot work but some time ago is working well??!
// taskkill /f /im node.exe
// npm start --reset-cache
// (另起一个终端)react-native run-android

// 3
// Error: EPERM: operation not permitted, lstat 'c:\Users\yuch\Desktop\android\android\app\build\intermediates\blame\res\debug\multi-v2'
// Emitted 'error' event at:
// at NodeWatcher.<anonymous> (c:\Users\yuch\Desktop\android\node_modules\sane\src\node_watcher.js:291:16)
// at FSReqWrap.oncomplete (fs.js:153:21)
// solve: cd android
// windows, gradlew clean // for Mac users, ./gradlew clean

export default function App() {
  return <AppNavigator />;
}
