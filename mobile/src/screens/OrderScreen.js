import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import gql from 'graphql-tag';
import ServiceList from "../components/ServiceList";


const homepageQuery = gql`
 {
  homepage{
    features{
      services{
        serviceID
        serviceName
        serviceAddress
        imageURI
        tags(count:2){
          tagName
        }
      }
      featureName
    }
  }
 }
`;

export default  () => {
  let serviceID = 1;
  // const {loading, error, data, refetch} = useQuery(homepageQuery,{variables:{serviceID:serviceID}});

  // if (loading) {
  //   return null;
  // }


  const orderItems = [];

  const OrderItem = () =>(
    <Text>Item</Text>
  );

  return (
    <FlatList
      // refreshing={loading}
      // onRefresh={()=>refetch()}
      data={orderItems}
      renderItem={({item}) => <OrderItem/>}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
