import React, {createContext} from 'react';

class User {
  currentUserID = 1;
  currentOrderID = 1;
  logOut(){
    this.currentUserID = null;
  }

  setUserOrder(userID, orderID){
    this.currentUserID = userID;
    this.currentOrderID = orderID
  }

  logIn(userID, orderID){
    return new Promise((resolve)=>{
      this.setUserOrder(userID, orderID);
      resolve();
    });
  }
}

export const userStore = new User();

export const userStoreContext = createContext(userStore);
