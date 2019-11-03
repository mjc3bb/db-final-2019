import React, {createContext} from 'react';



class Cart{
  items = new Map();

  addItem(){
    alert("Item added");
  }
}

export const cartStore = new Cart();

export const cartContext = createContext(cartStore);
