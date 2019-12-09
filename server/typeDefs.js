const {gql} = require('apollo-server');

const typeDefs = gql`
    input _ItemInput {
        itemID: Int
        serviceID: Int
        quantity: Int
    }

    input _OrderInput {
        userID: Int
        orderAddress: String
        items: [_ItemInput]
    }

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
        currentOrderID: ID
        currentOrder: Order
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
        getAddress(lat:String,lon:String): Address
    }

    type Mutation {
        createUserLogin(username:String, password:String):User
        attemptUserLogin(username:String, password:String):User
        createService(serviceName: String, serviceAddress:String, imageURI:String):Service
        addServiceItem(serviceID: Int, itemName:String, itemDescription:String, itemPrice: Float):Item
        removeServiceItem(serviceID: Int, itemID:Int):Boolean
        createOrder(order:_OrderInput): Order
        cancelUserOrder(userID:Int): Boolean
        addOrderLineItem(orderID:Int, item:_ItemInput): Boolean
        removeOrderLineItem(orderID: Int, lineID: Int): Boolean
        checkout(orderID:Int, userID: Int):Float
    }
`;

module.exports = {typeDefs};
