drop database if exists dbfinal;
create database dbfinal;
use dbfinal;
CREATE TABLE orders (
  orderID int PRIMARY KEY auto_increment,
  userID int,
  orderAddress varchar(255)
);

CREATE TABLE orderLineItems (
  orderID int,
  lineID int,
  itemID int,
  serviceID int,
  quantity int,
  primary key (orderID, lineID)
);

CREATE TABLE users (
  userID int PRIMARY KEY,
  username varchar(255),
  passHash varchar(255),
  accountBalance decimal(10,2)
);

CREATE TABLE services (
  serviceID int PRIMARY KEY AUTO_INCREMENT,
  serviceName varchar(255),
  serviceAddress varchar(255),
  imageURI varchar(500)
);

CREATE TABLE serviceItems (
  itemID int AUTO_INCREMENT,
  serviceID int,
  itemName varchar(255),
  itemDescription varchar(255),
  itemPrice decimal(10, 2),
  primary key(itemID, serviceID)
);

create table tags (
	tagID int auto_increment,
    tagName varchar(255) unique,
    primary key (tagID)
);

create table serviceTags (
	tagID int,
    serviceID int,
    primary key (tagID, serviceID)
);

ALTER TABLE orders ADD FOREIGN KEY (userID) REFERENCES users(userID);
ALTER TABLE serviceItems ADD FOREIGN KEY (serviceID) REFERENCES services(serviceID);
ALTER TABLE orderLineItems ADD FOREIGN KEY (orderID) REFERENCES orders(orderID);
ALTER TABLE orderLineItems ADD FOREIGN KEY (serviceID) REFERENCES services(serviceID);
ALTER TABLE orderLineItems ADD FOREIGN KEY (itemID) REFERENCES serviceItems(serviceID);
