import {createContext} from 'react';


export class User{
  loggedIn = false;

  constructor(){

  }

  doLogin(){
    return new Promise((resolve,reject)=>{
      this.loggedIn = true;
      resolve();
    })
  }

  doLogout(){
    return new Promise((resolve,reject)=>{
      this.loggedIn = false;
      resolve();
    })
  }
}

export const currentUser = new User();

export const userContext = createContext(currentUser);
