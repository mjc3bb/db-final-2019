const {sequelize} = require('../db');

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

const createUserLogin = (parent, {username, password}) => {
  return new Promise((resolve, reject)=>{
    let startingBalance = 5.0;
    let maxID = null;
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
        return sequelize.query(`insert into users(userid, username, passhash, accountbalance) value (${maxID}, '${username}', '${password}', ${startingBalance})`)
      })
      .then(()=>{
        return sequelize.query(`select * from users where userID=${maxID}`)
      })
      .then((results)=>{
        resolve(results[0][0])
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
  });
};

const removeOrderLineItem = (parent, {orderID, lineID}) =>{
  return new Promise(resolve => {
    sequelize.query(`delete from orderLineItems where orderID=${orderID} and lineID=${lineID}`).then(()=>resolve(true));
  })
};

module.exports = {attemptUserLogin, removeServiceItem, createUserLogin, createService, addServiceItem, createOrder, cancelUserOrder, addOrderLineItem, removeOrderLineItem};
