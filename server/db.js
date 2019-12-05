const Sequelize = require("sequelize");
const mysql = require('mysql');
let sequelize = new Sequelize('mysql://root:password@localhost:3306/dbfinal', {logging: true});

module.exports = {sequelize};
