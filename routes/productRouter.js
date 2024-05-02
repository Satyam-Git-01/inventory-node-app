const express = require("express");
const route = express.Router();
const productController = require("../controllers/productController");

route.get("/products", productController.GetAllProducts);
route.post("/products/add-product", productController.PostData);
route.put("/products/edit/:id/:number",productController.UpdateProduct)

module.exports = route;
