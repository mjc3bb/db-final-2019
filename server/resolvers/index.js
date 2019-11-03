const serviceResolver = require('./serviceResolver');
const userResolver = require('./userResolver');
const lineItemResolver = require('./lineItemResolver');
const orderResolver = require('./orderResolver');
const queryResolver = require('./queryResolver');
const mutationResolver = require('./mutationResolver');


const resolvers = {
  Service: serviceResolver,
  User: userResolver,
  LineItem: lineItemResolver,
  Order: orderResolver,
  Query: queryResolver,
  Mutation: mutationResolver
};

module.exports = {resolvers};
