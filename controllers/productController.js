const ProductModel = require("../models/productModel");

exports.GetAllProducts = (req, res, next) => {
  ProductModel.findAll()
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => console.log(err));
};
exports.AddProduct = (req, res, next) => {
  ProductModel.create({
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
  try {
    const { id, number } = req.params;
    const product = await ProductModel.findOne({ where: { id: id } });
    if(product.quantity-number<0){
      return res.status(201).send("Cant Update Item Quantity is minimal")
    }
    await product.decrement(["quantity"], { by: number });
    res.send("Updated SucccessFully");
  } catch (err) {
    res.send("Error Occured");
  }
};
