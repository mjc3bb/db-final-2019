const {sequelize} = require('../db');

const userResolver = {
  orders: ({userID}, args) => {
    return new Promise((resolve) => {
      sequelize.query(`select o.*
      from users u
                           join
      orders
          o
      on
      o.userID=${userID}`).then((result) => {
        resolve(result[0]);
      });
    });
  }
};

module.exports = userResolver;
