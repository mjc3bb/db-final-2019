import React from 'react';
import {Avatar,Text} from 'react-native-elements';
import {useNavigation} from 'react-navigation-hooks';

export default () => {
  const {openDrawer, navigate} = useNavigation();
  return (
    <>
      <Avatar rounded
              source={{
                uri:
                  'https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-03-512.png',
              }}
              overlayContainerStyle={{backgroundColor:"white"}}
              containerStyle={{margin: 5}}
              onPress={() => navigate('Order')}
      />
      <Avatar rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }} containerStyle={{margin: 5}}
              onPress={() => openDrawer()}
      />
    </>
  );
}
