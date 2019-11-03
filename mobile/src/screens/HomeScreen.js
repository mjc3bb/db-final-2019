import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {FlatList, Text} from 'react-native';
import ServiceList from '../components/ServiceList';
import gql from 'graphql-tag';

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
  const {loading, error, data, refetch} = useQuery(homepageQuery,{variables:{serviceID:serviceID}});
  if (loading) {
    return null;
  }
  return (
    <FlatList
      refreshing={loading}
      onRefresh={()=>refetch()}
      data={data.homepage.features}
      renderItem={({item}) => <ServiceList feature={item}/>}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
