const {sequelize} = require('../db');

const orderTotal = ({orderID}) => {
  `# select sum(si.itemPrice*oli.quantity) from orders o join orderLineItems oli on o.orderID=oli.orderID join serviceItems si on oli.itemID=si.itemID and oli.serviceID=si.serviceID where o.orderID=${orderID}`
  return new Promise((resolve) => {
    sequelize.query(`select sum(si.itemPrice * oli.quantity) as total
                     from orders o
                              join orderLineItems oli on o.orderID = oli.orderID
                              join serviceItems si on oli.itemID = si.itemID and oli.serviceID = si.serviceID
    where o.orderID=${orderID}`).then(
      (results) => {
        if (results[0][0].total == null) {
          resolve(0);
        }
        resolve(parseFloat(results[0][0].total))
      })
  });
};

const user = ({userID}, args, context, info) => {
  return new Promise((resolve) => {
    sequelize.query(`select *
                     from users
    where userID=${userID}`).then((results) => {
      resolve(results[0][0])
    })
  });
};

const lineItems = ({orderID}, args, context, info) => {
  return new Promise((resolve) => {
    sequelize.query(`select *
                     from orderLineItems
    where orderID=${orderID}`).then((results) => {
      resolve(results[0]);
    });
  });
};


module.exports = {orderTotal, user, lineItems};
