import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import indexScreen from '../screens/indexScreen'
import MenuScreen from '../screens/MenuScreen'

const home_stackNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
});

const index_stackNav = createStackNavigator({
  Index: {
    screen: indexScreen
  }
});

const menu_stackNav = createStackNavigator({
    Menu: {
        screen: MenuScreen
    }
});

export default createDrawerNavigator({
      Home: {
        screen: home_stackNav
      },
      Index: {
        screen: index_stackNav
      },
      Menu: {
          screen: menu_stackNav
      }
    }
)

