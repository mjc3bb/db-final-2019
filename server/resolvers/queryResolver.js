const {sequelize} = require('../db');
const axios = require('axios');
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
  getAddress: (parent, args) =>{
    // return {formatted:"Whitestone Road"};
    console.log(args);
    const {lat,lon} = args;
    return new Promise((resolve)=>{
      axios.get(`http://open.mapquestapi.com/geocoding/v1/reverse?key=ZQBdqhTJniHjNBViA4Yj1JZAEwEAAtjj&location=${lat},${lon}&includeRoadMetadata=true&includeNearestIntersection=true`).then((result)=>{
        // if (!result.data || !result.data.results || !result.data.results[0].locations[0] || !result.data.results[0].locations[0].street){
        //   resolve({formatted:"123 Eagle Drive"})
        // }
        const response = {
          formatted: result.data.results[0].locations[0].street
        };
        resolve(response);
      });
    });
  },
};

module.exports = queryResolver;
