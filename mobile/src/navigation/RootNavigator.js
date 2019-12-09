import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from "../screens/LoginScreen";



export default createAppContainer(
  createStackNavigator(
    {
      LogIn: LoginScreen,
      Root: DrawerNavigator
    },{
      defaultNavigationOptions:{
        header:null
      }
    }
  )
);
