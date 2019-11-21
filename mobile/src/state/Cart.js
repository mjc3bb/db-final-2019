import React, {createContext} from 'react';


class Cart{
  items = [];

  addItem(itemID, serviceID, quantity){
    this.items.push({itemID, serviceID, quantity});
    alert(quantity);
  }
}

export const cartStore = new Cart();

export const cartContext = createContext(cartStore);
