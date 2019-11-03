import React, {useMemo} from 'react';
import {Button, ButtonGroup, Card, Text} from 'react-native-elements';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import TagGroup from './TagGroup';
import {useNavigation} from 'react-navigation-hooks';

const cardStyle = StyleSheet.create({
  container: {
    width: 250,
    marginVertical:5,
    marginLeft:10,
    marginRight:0
  },
  button: {
    backgroundColor:'grey',
    borderRadius: 15,
    alignSelf: 'baseline',
    marginHorizontal: 3,
    paddingVertical:4
  },
});
export default ({service}) => {
  const {navigate} = useNavigation();
  const {serviceName, imageURI,tags} = service;
  return (
    <TouchableOpacity onPress={()=>navigate('Menu', {service: service})}>
      <Card
        containerStyle={cardStyle.container}
        imageStyle={{height:120}}
        image={{uri: imageURI}}
      >
        <Text style={{marginVertical:3}}>{serviceName}</Text>
        <TagGroup tags={tags}/>
      </Card>
    </TouchableOpacity>
  );
}
