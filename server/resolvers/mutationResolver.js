const {sequelize} = require('../db');

const mutationResolver = {
  createService: (parent, {serviceName = "", serviceAddress = "", imageURI = ""}) => {
    return new Promise((resolve) => {
      sequelize.query(`insert into services(serviceName, serviceAddress, imageURI) values ("${serviceName}", "${serviceAddress}", "${imageURI}")`).then(() => {
        // sequelize.query(`select * from services where serviceID=${serviceID}`).then((results)=>{
        resolve()
        // })
      });
    });
  },
  addServiceItem: (parent, {serviceID, itemName, itemDescription, itemPrice}) => {
    return new Promise((resolve) => {
      console.log(serviceID);
      sequelize.query(`insert into serviceItems(serviceID, itemName, itemDescription, itemPrice) values (${serviceID}, "${itemName}", "${itemDescription}", ${itemPrice})`).then(() => {
        sequelize.query(`select * from serviceItems where serviceID=${serviceID} order by itemID desc limit 1`).then((results) => {
          resolve(results[0][0])
        })
      });
    });
  }
};

module.exports = mutationResolver;
