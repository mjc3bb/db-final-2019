const Sequelize = require("sequelize");

const {ApolloServer, gql} = require('apollo-server');
const mysql = require('mysql');
let sequelize = new Sequelize('mysql://root:password@localhost:3306/ood', {logging: true});
let _ = require('underscore');

const typeDefs = gql`
    type Address {
        city: String
        formatted: String
        street: String
        state: String
        postal_code: String
    }

    type Tag {
        tagID: Int
        serviceID: Int
        tagName: String
        services: [Service]
    }

    type FeatureList {
        services: [Service]
        featureName: String
    }

    type Homepage {
        features: [FeatureList]
    }

    type Service{
        serviceID: ID
        serviceName: String
        serviceAddress: String
        imageURI: String
        items: [Item]
        tags(count:Int): [Tag]
    }

    type Item {
        serviceID: Int
        itemID: Int
        itemName: String
        itemDescription: String
        itemPrice: Float
    }

    type User {
        userID: ID
        username: String
        accountBalance: Float
        orders: [Order]
    }

    type LineItem {
        orderID: ID
        order: Order
        lineID: Int
        itemID: Int
        item: Item
        serviceID: Int
        # service: Service
        quantity: Int
    }

    type Order {
        orderID: ID!
        userID: Int!
        user: User!
        orderAddress: String!
        orderTotal: Float
        lineItems: [LineItem]!
    }

    type Query {
        users: [User]
        user(userID:Int): User
        orders: [Order]
        order(orderID:ID): Order
        services: [Service]
        homepage: Homepage
        service(serviceID:ID): Service
    }

    type Mutation {
        createService(serviceName: String, serviceAddress:String, imageURI:String):Service
        addServiceItem(serviceID: Int, itemName:String, itemDescription:String, itemPrice: Float):Item
        createOrder(userID:ID,orderAddress:String): Order
    }
`;


const resolvers = {
  Service: {
    items: ({serviceID}) => {
      // select items.* from services s join serviceItems items on s.serviceID=items.serviceID where s.serviceID=1;
      return new Promise((resolve) => {
        sequelize.query(`select items.*
                         from services s
                                  join serviceItems items on s.serviceID = items.serviceID
        where s.serviceID=${serviceID}`).then((result) => {
          resolve(result[0]);
        });
      });
    },
    tags: ({serviceID}, {count}) => {
      return new Promise((resolve) => {
          if (!count) count = 20;
          sequelize.query(`select s.* from serviceTags st, tags s where serviceID=${serviceID} and st.tagID=s.tagID limit 0,${count}`).then((results) => {
            resolve(results[0]);
          })
        }
      )
    }
  },
  User: {
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
  },
  LineItem: {
    item: ({itemID, serviceID}, args, context, info) => {
      return new Promise((resolve) => {
        sequelize.query(`select * from serviceItems where itemID=${itemID} and serviceID=${serviceID}`).then((result) => {
          resolve(result[0][0])
        });
      });
    }
  },
  Order: {
    orderTotal: ({orderID}) => {
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
    },
    user: ({userID}, args, context, info) => {
      return new Promise((resolve) => {
        sequelize.query(`select *
                         from users
        where userID=${userID}`).then((results) => {
          resolve(results[0][0])
        })
      });
    },
    lineItems: ({orderID}, args, context, info) => {
      return new Promise((resolve) => {
        sequelize.query(`select *
                         from orderLineItems
        where orderID=${orderID}`).then((results) => {
          resolve(results[0]);
        });
      });
    }
  },
  Query: {
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
    // data: () => {
    //   return data.result.data;
    // },
    // cuisines:() =>{
    //   return new Promise((resolve)=> {
    //     let cuisines = new Map();
    //
    //     data.result.data.forEach((item) => {
    //       const inner_cuisines = item.cuisines;
    //       inner_cuisines.forEach((cuisine) => {
    //         if (!cuisines.get(cuisine)) cuisines.set(cuisine, {tagName: cuisine, services: []});
    //         let newCuisine = cuisines.get(cuisine);
    //         newCuisine.services.push({serviceName:item.restaurant_name});
    //         cuisines.set(cuisine, newCuisine);
    //       });
    //     });
    //
    //     cuisines['a'] = {tagName: 'a'};
    //
    //
    //     resolve(cuisines);
    //   });
    //   // const arr = _.map(_.flatten(_.map(data.result.data,(item)=>{return item.cuisines})),(item)=>{return {tagName:item}});
    //   // console.log(arr);
    //   // console.log(data.result.data.map((item)=>{return {cuisines: item.cuisines}}));
    //   // return arr;
    // },
  },
  Mutation: {
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
  }
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({typeDefs, resolvers, tracing: false});


// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
