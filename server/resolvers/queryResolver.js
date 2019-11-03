const {sequelize} = require('../db');
let _ = require('underscore');


const queryResolver = {
  users: () => {
    return new Promise((resolve, reject) => {
      sequelize.query('select * from users').then((results) => {
        resolve(results[0])
      });
    });
  },
  user: (parent, {userID}) => {
    return new Promise((resolve) => {
      sequelize.query(`select *
                       from users
      where userID=${userID}`).then((result) => {
        resolve(result[0][0])
      });
    });
  },
  orders: () => {
    return new Promise((resolve, reject) => {
      sequelize.query('select * from orders').then((results) => {
        resolve(results[0])
      });
    });
  },
  order: (parent, {orderID}) => {
    return new Promise((resolve) => {
      sequelize.query(`select *
                       from orders
      where orderID=${orderID}`).then((results) => {
        if (results[0]) {
          resolve(results[0][0])
        } else {
          resolve(null)
        }
      });
    });
  },
  services: () => {
    return new Promise((resolve, reject) => {
      sequelize.query('select * from services').then((results) => {
        resolve(results[0])
      });
    });
  },
  homepage: () => {
    return new Promise((resolve, reject) => {
      sequelize.query('select * from services order by rand()').then((results) => {
        const resultsLength = results[0].length;
        resolve({
          features: [
            {
              featureName: 'Deals',
              services: _.sample(results[0], 3)
            },
            {
              featureName: 'Popular',
              services: _.sample(results[0], 3)
            },
            {
              featureName: 'Near You',
              services: _.sample(results[0], 3)
            },
            {
              featureName: 'All Services',
              services: results[0]
            },
          ]
        });
      });
    });
  },
  service: (parent, {serviceID}) => {
    return new Promise((resolve) => {
      sequelize.query(`select *
                       from services
      where serviceID=${serviceID}`).then((results) => {
        if (results[0]) {
          resolve(results[0][0])
        } else {
          resolve(null)
        }
      });
    });
  },
};

module.exports = queryResolver;
