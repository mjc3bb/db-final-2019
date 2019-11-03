import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DrawerNavigator from './DrawerNavigator';



export default createAppContainer(
  createStackNavigator(
    {
      Root: DrawerNavigator
    },{
      defaultNavigationOptions:{
        header:null
      }
    }
  )
);
