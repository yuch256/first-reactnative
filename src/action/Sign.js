import { Alert, AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage'

export default class Sign {
  static async appSignUp(navigation, usr, pwd) {
    await AsyncStorage.setItem('usr', usr)
    await AsyncStorage.setItem('pwd', pwd)
    Alert.alert('注册成功')
    navigation.navigate('Main')
  }

  static async appSignOut(navigation) {
    await AsyncStorage.removeItem('usr')
    await AsyncStorage.removeItem('pwd')
    Alert.alert('退出成功！')
    navigation.navigate('Sign')
  }
}

// export async function appSignUp(navigation, usr, pwd) {
//   await AsyncStorage.setItem('usr', usr)
//   await AsyncStorage.setItem('pwd', pwd)
//   Alert.alert('注册成功')
//   navigation.navigate('Main')
// }