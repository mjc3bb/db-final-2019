import React, {createContext} from 'react';
import {useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";
import {client} from "../API";
import {Alert} from "react-native";
import {userStore} from './User';

class Cart{
  items = [];

  addItem(itemID, serviceID, quantity){
    client.mutate({
      mutation: gql`
          mutation o($orderID:Int, $item:_ItemInput) {
              addOrderLineItem(orderID:$orderID,item:$item)
          }
      `,
      variables: {
        orderID: parseInt(userStore.currentOrderID),
        item: {
          itemID:parseInt(itemID),
          serviceID:parseInt(serviceID),
          quantity:parseInt(quantity)
        }
      }
    }).catch((error)=>alert(JSON.stringify(error)));

    this.items.push({itemID, serviceID, quantity});
  }
}

export const cartStore = new Cart();

export const cartContext = createContext(cartStore);
