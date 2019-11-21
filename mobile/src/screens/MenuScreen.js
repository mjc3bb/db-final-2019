import React, {useState} from 'react';
import gql from 'graphql-tag';
import {Dimensions, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import {useNavigation} from 'react-navigation-hooks';
import {useQuery} from '@apollo/react-hooks';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';
import MenuItem from '../components/MenuItem';

const menuQuery = gql`
query serviceInfo($serviceID:ID){
  service(serviceID:$serviceID){
    serviceID
    items{
      itemName
      itemID
      itemDescription
      itemPrice
    }
  }
}
`;

const MenuList = ({itemList, serviceID}) => {
  return (
    <FlatList data={itemList} renderItem={({item}) => <MenuItem item={item} serviceID={serviceID}/>}/>
  );
};


const MenuTabBar = (props) => <TabBar {...props}/>;

export default () => {
  const {getParam} = useNavigation();
  const {serviceID, serviceName} = getParam('service');
  const {loading, error, data} = useQuery(menuQuery, {variables:{serviceID:serviceID}});

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error){ alert(error);return null};
  const itemList = data.service.items;

  return (
    <>
      <MenuList itemList={itemList} serviceID={serviceID}/>
    </>
  );
};
