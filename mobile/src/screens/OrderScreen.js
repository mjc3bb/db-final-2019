import React, {useEffect, useState, useContext} from 'react';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {FlatList, View, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import {Card, Divider, Input, Text} from 'react-native-elements';
import gql from 'graphql-tag';
import {cartStore} from "../state/Cart";
import Collapsible from 'react-native-collapsible';

const homepageQuery = gql`
    query u($userID:Int) {
        user(userID:$userID){
            currentOrder{
                orderID
                orderAddress
                orderTotal
                lineItems{
                    orderID
                    lineID
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

const OrderItem = ({lineItem, refetch}) => {
  const {item, quantity, lineID, orderID} = lineItem;
  const [cancelLineItem, {error}] = useMutation(gql`    
      mutation CancelLineItem($orderID:Int, $lineID:Int){
          removeOrderLineItem(orderID:$orderID, lineID: $lineID)
      }
  `);
  const [collapsed, setCollapsed] = useState(true);

  function f() {
    cancelLineItem({variables: {orderID:parseInt(orderID), lineID:parseInt(lineID)}}).then(()=>{refetch()})

  }

  if (error){
    alert(error);
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setCollapsed(!collapsed)}
      >
        <Card
          containerStyle={{
            margin: 0,
            marginBottom: 1,
            shadowOffset: {width: 0, height: 0}
          }}
        >
          <View>
            <View style={{flexDirection: 'row', marginVertical: 3}}>
              <Text style={{flex: 1}}>{item.itemName}</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>${item.itemPrice} x {quantity}</Text>
            </View>
            <Collapsible collapsed={collapsed}>
              {/*<Divider/>*/}
              <View style={{flexDirection: "row"}}>
                <Button
                  onPress={f}
                  title="Cancel"
                />
              </View>
            </Collapsible>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  )
};

export default () => {
  let userID = 1;
  const {loading, error, data, refetch} = useQuery(homepageQuery, {variables: {userID: userID}});
  const [isLoading, setIsLoading] = useState(loading);
  function re(){
    setIsLoading(true);
    refetch({variables: {userID: userID}}).then(()=>setIsLoading(false))
  }

  useEffect(()=>{
    re();
  },[cartStore.items]);

  if (loading) {
    return null;
  }



  return (
    <SafeAreaView>
      <View style={{height:'100%', width:'100%'}}>
      <FlatList
        style={{
          flex:8,
          minHeight:'80%'
        }}
        refreshing={isLoading}
        onRefresh={()=>re()}
        data={data.user && data.user.currentOrder ? data.user.currentOrder.lineItems : []}
        renderItem={({item}) => <OrderItem lineItem={item} refetch={re}/>}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{flex:2, justifyContent:'center', padding:20}}>
        <Text >Order Total: {data.user && data.user.currentOrder ? data.user.currentOrder.orderTotal : 0}</Text>
        <Button title="Checkout" onPress={()=>{}}/>
      </View>
      </View>
    </SafeAreaView>
  );
};
