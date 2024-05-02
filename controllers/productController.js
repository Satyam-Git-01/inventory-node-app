const { where } = require("sequelize");
const sequelize = require("../models/productModel");

exports.GetAllProducts = (req, res, next) => {
  sequelize
    .findAll()
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => console.log(err));
};
exports.PostData = (req, res, next) => {
  sequelize
    .create({
      itemname: req.body.itemname,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};

exports.UpdateProduct = async (req, res, next) => {
  const { id, number } = req.params;
  const product = await sequelize.findOne({ where: { id: id } });
  await product.decrement(["quantity"], { by: number });
  res.send("Ok");
};
