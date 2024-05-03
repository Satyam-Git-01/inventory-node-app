const express = require("express");
const path = require("path");
const productRoute = require("./routes/productRouter");
const ProductModel = require("./models/productModel");
const bodyParser = require("body-parser");
const cors = require("cors");
//Import Statements End
const app = express();

//Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/products", productRoute);

ProductModel.sync()
  .then((response) => {
    app.listen(4500, () => {
      console.log(`APP URL http://localhost:4500`);
    });
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
