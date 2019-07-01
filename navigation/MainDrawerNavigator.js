import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import indexScreen from '../screens/indexScreen'
import RestaurantListScreen from '../screens/ResturantListScreen'
import OrderScreen from '../screens/OrderScreen'


const home_stackNav = createStackNavigator({
  Home: {
    screen: indexScreen
  }
});

const restaurant_stackNav = createStackNavigator({
    Restaurant: {
        screen: RestaurantListScreen,
    }
});

const order_stackNav = createStackNavigator({
    "Shopping Cart": {
        screen: OrderScreen,
    }
});


export default createDrawerNavigator({

      Home: {
          screen: home_stackNav
      },

      Restaurant: {
          screen: restaurant_stackNav,
      },
      "Shopping Cart":{
          screen: order_stackNav,
      },

    }
)

