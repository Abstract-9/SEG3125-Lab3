import React from 'react';
import { Platform } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import indexScreen from '../screens/indexScreen'

const home_stackNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
});

const links_stackNav = createStackNavigator({
  Links: {
    screen: LinksScreen
  }
});

const index_stackNav = createStackNavigator({
  Index: {
    screen: indexScreen
  }
});

export default createDrawerNavigator({
      Home: {
        screen: home_stackNav
      },
      Links: {
        screen: links_stackNav
      },
      Index: {
        screen: index_stackNav
      },
    }
)

