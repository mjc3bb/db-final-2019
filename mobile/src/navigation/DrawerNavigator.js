import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DrawerScreen from '../screens/DrawerScreen';
import ContentNavigator from './ContentNavigator';

export default createDrawerNavigator(
  {
    Root:ContentNavigator
  },{
    drawerWidth:200,
    drawerPosition:'right',
    contentComponent:DrawerScreen,
  }
);
