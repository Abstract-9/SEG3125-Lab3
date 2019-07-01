import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import indexScreen from '../screens/indexScreen'
import MenuScreen from '../screens/MenuScreen'
import RestaurantListScreen from '../screens/ResturantListScreen'
import CheckoutScreen from '../screens/CheckoutScreen'
import OrderScreen from '../screens/OrderScreen'

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

const restaurant_stackNav = createStackNavigator({
    Restaurant: {
        screen: RestaurantListScreen,
    }
});

const order_stackNav = createStackNavigator({
    Order: {
        screen: OrderScreen,
    }
});

const home_stackNav = createStackNavigator({
    Home: {
        screen: CheckoutScreen,
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
      },
      Restaurant: {
          screen: restaurant_stackNav,
      },
      Order: {
        screen: order_stackNav,
      }
    }
)

