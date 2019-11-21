const {sequelize} = require('../db');
const axios = require('axios');
let _ = require('underscore');

const users = () => {
  return new Promise((resolve, reject) => {
    sequelize.query('select * from users').then((results) => {
      resolve(results[0])
    });
  });
};

const user = (parent, {userID}) => {
  return new Promise((resolve) => {
    sequelize.query(`select *
                     from users
    where userID=${userID}`).then((result) => {
      resolve(result[0][0])
    });
  });
};

const orders = () => {
  return new Promise((resolve, reject) => {
    sequelize.query('select * from orders').then((results) => {
      resolve(results[0])
    });
  });
};

const order = (parent, {orderID}) => {
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
};

const services = () => {
  return new Promise((resolve, reject) => {
    sequelize.query('select * from services').then((results) => {
      resolve(results[0])
    });
  });
};

const homepage = () => {
  return new Promise((resolve, reject) => {
    sequelize.query('select * from services order by rand()').then((results) => {
      resolve({
        features: [
          { featureName: 'Deals', services: _.sample(results[0], 3) },
          { featureName: 'Popular', services: _.sample(results[0], 3) },
          { featureName: 'Near You', services: _.sample(results[0], 3) },
          { featureName: 'All Services', services: results[0] },
        ]
      });
    });
  });
};

const service = (parent, {serviceID}) => {
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
};

const getAddress = (parent, args) => {
  // return {formatted: "Whitestone Rd"};
  const {lat, lon} = args;
  return new Promise((resolve) => {
    axios.get(`http://open.mapquestapi.com/geocoding/v1/reverse?key=ZQBdqhTJniHjNBViA4Yj1JZAEwEAAtjj&location=${lat},${lon}&includeRoadMetadata=true&includeNearestIntersection=true`)
      .then((result) => {
        const response = {
          formatted: result.data.results[0].locations[0].street
        };
        resolve(response);
      });
  });
};

module.exports = {users, user, orders, order, services, homepage, service, getAddress};
