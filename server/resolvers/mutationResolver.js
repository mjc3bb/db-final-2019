const {sequelize} = require('../db');

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
        resolve({orderID:maxID, userID, orderAddress})
      })


  });
};

module.exports = {createService, addServiceItem, createOrder};
