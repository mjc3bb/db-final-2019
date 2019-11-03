import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import LocationETA from '../components/LocationETA';
import HeaderAvatar from '../components/HeaderAvatar';


export default createStackNavigator(
  {
    Main: HomeScreen,
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        headerLeft: undefined,
      },
    },
  }, {
    defaultNavigationOptions: {
      headerLeft: LocationETA,
      headerRight:<HeaderAvatar/>,
    },
  },
);
