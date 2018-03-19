import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Root } from 'native-base';

import LoginScreen from './app/components/Login/Login'
import ConnectScreen from './app/components/Connect/Connect'
import HomeScreen from './app/components/Home/Home'

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render() {
    return (
      <Root>
        <RootStack />
      </Root>
    );
  }
}

const RootStack = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Connect: {
    screen: ConnectScreen,
  },
  Home: {
    screen: HomeScreen,
  },
});
