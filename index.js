/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';
import { Login } from './src/containers/Login';
import { Home } from './src/containers/Home'

// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// console.disableYellowBox = true;


const root = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    },
    // STS02: {
    //   screen: STS02
    // },
    // STS03: {
    //   screen: STS03
    // }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);

AppRegistry.registerComponent(appName, () => root);
