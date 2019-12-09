const {sequelize} = require('../db');
const {orderTotal} = require('./orderResolver');
const {order, user} = require('./queryResolver');

const attemptUserLogin = (parent, {username, password}) => {
  return new Promise((resolve, reject) => {
    sequelize.query(`select * from users where username='${username}' and passHash='${password}'`)
      .then((results)=>{
        console.log(results[0]);
        if (results[0].length>0){
          resolve(results[0][0])
        }else{
          reject('Username or password incorrect')
        }
      })
  });
};



const createService = (parent, {serviceName = "", serviceAddress = "", imageURI = ""}) => {
  return new Promise((resolve) => {
    sequelize.query(`insert into services(serviceName, serviceAddress, imageURI) values ("${serviceName}", "${serviceAddress}", "${imageURI}")`).then(() => {
      // sequelize.query(`select * from services where serviceID=${serviceID}`).then((results)=>{
      resolve()
      // })
    });
  });
};

const addServiceItem = (parent, {serviceID, itemName, itemDescription, itemPrice}) => {
  return new Promise((resolve) => {
    console.log(serviceID);
    sequelize.query(`insert into serviceItems(serviceID, itemName, itemDescription, itemPrice) values (${serviceID}, "${itemName}", "${itemDescription}", ${itemPrice})`).then(() => {
      sequelize.query(`select * from serviceItems where serviceID=${serviceID} order by itemID desc limit 1`).then((results) => {
        resolve(results[0][0])
      })
    });
  });
};

const removeServiceItem = (parent, {serviceID, itemID}) => {
  return new Promise((resolve)=>{
    sequelize.query(`delete from serviceItems where serviceID=${serviceID} and itemID=${itemID}`)
      .then(()=>{resolve(true)});
  });
};

const createOrder = (parent, {order}) => {
  return new Promise((resolve)=>{
    const {userID, orderAddress, items} = order;
    let maxID = null;
    sequelize.query(`select max(orderID)+1 as maxID from orders`)
      .then((result)=>{
        const {maxID:newMaxID} = result[0][0];
        maxID = newMaxID ? newMaxID : 1;
        return sequelize.query(`insert into orders value (${maxID}, ${userID},"${orderAddress}")`)
      })
      .then(()=>{
        let count = 0;
        return Promise.all(items.map(item=>{
          count++;
          return sequelize.query(`insert into orderLineItems value (${maxID}, ${count}, ${item.itemID}, ${item.serviceID}, ${item.quantity})`)
        }));
      })
      .then(()=>{
        return sequelize.query(`update users set currentOrderID = ${maxID} where userID=${userID}`)
      })
      .then(()=>{
        resolve({orderID:maxID, userID, orderAddress})
      })
  });
};

const createUserLogin = (parent, {username, password}) => {
  return new Promise((resolve, reject)=>{
    let startingBalance = 5.0;
    let maxID = null;
    let newUserID = null;
    let newUser = null;
    let newOrderID = null;
    sequelize.query(`select * from users where username='${username}'`)
      .then((results)=>{
        if (results[0].length>0){
          reject('User already exists')
        }else{
          return sequelize.query(`select max(userID)+1 as maxID from users`)
        }
      })
      .then((results)=>{
        const {maxID: newMaxID} = results[0][0];
        maxID = newMaxID ? newMaxID : 1;
        newUserID = maxID;
        return sequelize.query(`insert into users(userid, username, passhash, accountbalance) value (${maxID}, '${username}', '${password}', ${startingBalance})`)
      })
      .then(()=>{
        return sequelize.query(`select * from users where userID=${maxID}`)
      })
      .then((results)=>{
        newUser = results[0][0];
      })
      .then(()=>{
        const order = {
          userID:newUserID,
          orderAddress:"",
          items:[]
        };
        return createOrder(null, {order})
      })
      .then((result)=>{
        // result.orderID
        newOrderID = result.orderID;
        return sequelize.query(`update users set currentOrderID=${result.orderID} where userID=${newUserID}`);
      })
      .then(()=>{
        newUser.currentOrderID = newOrderID;
        resolve(newUser);
      })
  });
};

const cancelUserOrder = (parent, {userID}) =>{
  return new Promise((resolve)=>{
    sequelize.query(`update users set currentOrderID=NULL where userID=${userID}`).then(()=>resolve(true));
  })
};

const addOrderLineItem = (parent, {orderID, item}) => {
  return new Promise((resolve, reject) => {
    let maxID = null;
    sequelize.query(`select max(lineID) + 1 as maxID from orderLineItems where orderID=${orderID}`)
      .then((result) => {
        const {maxID: newMaxID} = result[0][0];
        maxID = newMaxID ? newMaxID : 1;
        return sequelize.query(`insert into orderLineItems value (${orderID}, ${maxID}, ${item.itemID}, ${item.serviceID}, ${item.quantity})`)
      })
      .then(() => {
        resolve(true)
      })
      .catch((error)=>reject(error))
  });
};

const removeOrderLineItem = (parent, {orderID, lineID}) =>{
  return new Promise(resolve => {
    sequelize.query(`delete from orderLineItems where orderID=${orderID} and lineID=${lineID}`).then(()=>resolve(true));
  })
};

const checkout = (parent, {orderID, userID}) =>{
  let newTotal = 0;
  let newOrder = null;
  let newUser = null;
  let newBalance = 0;
  return new Promise((resolve, reject)=>{
    orderTotal({orderID})
      .then((total)=>{
         newTotal = total;
      })
      .then(()=>{
        return order(null, {orderID})
      })
      .then((order)=>{
        newOrder = order;
      })
      .then(()=>{
        return user(null, {userID})
      })
      .then((user)=>{
        newUser = user;
      })
      .then(()=>{
        if (newTotal>newUser.accountBalance) reject('not enough money');
        else{
          newBalance = newUser.accountBalance - newTotal;
        }
      })
      .then(()=>{
        sequelize.query(`update users set accountBalance=${newBalance}, currentOrderID=null`).then(()=>resolve(newBalance))
      })
  });
};

module.exports = {attemptUserLogin, checkout, removeServiceItem, createUserLogin, createService, addServiceItem, createOrder, cancelUserOrder, addOrderLineItem, removeOrderLineItem};
