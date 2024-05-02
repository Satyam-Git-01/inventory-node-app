const sequelize = require("../database/db");
const Sequelize = require("sequelize");

const products = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  itemname: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});

module.exports=products;