import React from 'react';
import {FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import ServiceCard from './ServiceCard';

export default ({feature}) => {
  return (
    <>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 0,
        marginLeft: 10
      }}>{feature.featureName}</Text>
      <FlatList horizontal style={{marginLeft: 0, marginVertical:5, paddingBottom:20}}
                data={feature.services}
                renderItem={({item}) => {return <ServiceCard service={item}/>}}
                keyExtractor={(item,index)=>index.toString()}
      />
    </>
  );
}
