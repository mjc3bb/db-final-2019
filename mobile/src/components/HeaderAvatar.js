import React from 'react';
import {Avatar} from 'react-native-elements';
import {useNavigation} from 'react-navigation-hooks';

export default () => {
  const {openDrawer} = useNavigation();
  return (
    <Avatar rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }} containerStyle={{margin: 5}}
            onPress={() => openDrawer()}
    />
  );
}
