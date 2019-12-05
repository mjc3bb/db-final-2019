import React, {createContext} from 'react';

class User {
  currentUserID = 1;
  currentOrderID = 1;
  logOut(){
    this.currentUserID = null;
  }

  logIn(userID){
    this.currentUserID = userID;
  }
}

export const userStore = new User();

export const userStoreContext = createContext(userStore);
