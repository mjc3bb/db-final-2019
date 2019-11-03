const {sequelize} = require('../db');


const lineItemResolver = {
  item: ({itemID, serviceID}, args, context, info) => {
    return new Promise((resolve) => {
      sequelize.query(`select * from serviceItems where itemID=${itemID} and serviceID=${serviceID}`).then((result) => {
        resolve(result[0][0])
      });
    });
  }
};

module.exports = lineItemResolver;
