const {sequelize} = require('../db');

const orders = ({userID}, args) => {
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
};

const currentOrder = ({currentOrderID}) =>{
  return new Promise(resolve => {

    if (currentOrderID == null) resolve(null);

    sequelize.query(`select * from orders where orderID=${currentOrderID}`)
      .then((results)=>{

        if (results[0].length > 0) resolve(results[0][0]);
        else resolve(null);
      })
  })
}

module.exports = {orders, currentOrder};
