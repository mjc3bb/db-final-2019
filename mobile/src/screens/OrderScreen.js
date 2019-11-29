import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import gql from 'graphql-tag';
import ServiceList from "../components/ServiceList";


const homepageQuery = gql`
    query u($userID:Int) {
        user(userID:$userID){
            currentOrder{
                orderID
                orderAddress
                orderTotal
                lineItems{
                    quantity
                    item{
                        serviceID
                        itemID
                        itemName
                        itemDescription
                        itemPrice
                    }

                }
            }
        }
    }
`;

export default () => {
  let userID = 1;
  const {loading, error, data, refetch} = useQuery(homepageQuery, {variables: {userID: userID}});

  if (loading) {
    return null;
  }



  const OrderItem = ({lineItem}) => {
    const {item, quantity} = lineItem;

    return (
      <>
        <Text>{item.itemName}</Text>
        <Text>{item.itemDescription}</Text>
        <Text>${item.itemPrice}</Text>
        <Text>{quantity}</Text>
      </>
    )
  };

  return (
    <FlatList
      // refreshing={loading}
      // onRefresh={()=>refetch()}
      data={data.user.currentOrder ? data.user.currentOrder.lineItems : []}
      renderItem={({item}) => <OrderItem lineItem={item}/>}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
