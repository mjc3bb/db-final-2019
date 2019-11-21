import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import LocationETA from '../components/LocationETA';
import HeaderAvatar from '../components/HeaderAvatar';
import OrderScreen from "../screens/OrderScreen";


export default createStackNavigator(
  {
    Main: HomeScreen,
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        headerLeft: undefined,
      },
    },
    Order:{
      screen: OrderScreen,
      navigationOptions: {
        headerLeft: undefined,
        headerTitle: "Your Order"
      }
    }
  }, {
    defaultNavigationOptions: {
      headerLeft: LocationETA,
      headerRight:<HeaderAvatar/>,
    },
  },
);
