const express = require("express");
const route = express.Router();
const productController = require("../controllers/productController");

route.get("/", productController.GetAllProducts);
route.post("/add-product", productController.AddProduct);
route.put("/edit/:id/:number",productController.UpdateProduct)

module.exports = route;
