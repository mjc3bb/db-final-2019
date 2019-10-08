drop database ood;
create database ood;
use ood;
CREATE TABLE orders (
  orderID int PRIMARY KEY,
  userID int,
  orderAddress varchar(255),
  orderTotal decimal(10,2)
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
  serviceID int PRIMARY KEY,
  serviceName varchar(255),
  serviceAddress varchar(255)
);

CREATE TABLE serviceItems (
  serviceID int,
  itemID int,
  itemName varchar(255),
  itemDescription varchar(255),
  itemPrice decimal(10, 2),
  primary key(serviceID, itemID)
);

ALTER TABLE orders ADD FOREIGN KEY (userID) REFERENCES users(userID);
ALTER TABLE serviceItems ADD FOREIGN KEY (serviceID) REFERENCES services(serviceID);
ALTER TABLE orderLineItems ADD FOREIGN KEY (orderID) REFERENCES orders(orderID);
ALTER TABLE orderLineItems ADD FOREIGN KEY (serviceID) REFERENCES services(serviceID);
ALTER TABLE orderLineItems ADD FOREIGN KEY (itemID) REFERENCES serviceItems(serviceID);


insert into services values (
	1, "Taco Bell", "123 Taco Ln"
);

insert into services values (
	2, "Wendy's", "456 Square Ln"
);

insert into serviceItems values (
	1,1, "Taco", "It's a Taco", 1.50
);

insert into serviceItems values (
	1,2, "Burrito", "It's a Burrito", 3.25
);

insert into serviceItems values (
	2, 1, "4 for 4","It's a combo deal", 4.00
);

insert into users values (
	1, 'user', 'password', 122.22
);

insert into orders values (
	1, 1, "1 Home Dr", 0
);

insert into orderLineItems values (
	1, 1, 1, 1, 3
);

insert into orderLineItems values (
	1, 2, 2, 1, 12
);

insert into orders values (
	2, 1, "Totally a different address", 0
);

