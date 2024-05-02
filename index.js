const express = require("express");
const app = express();
const path = require("path");
const productRoute = require("./routes/productRouter");
const sequelize = require("./models/productModel");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/", productRoute);

sequelize
  .sync()
  .then((resp) => {
    app.listen(4500, () => {
      console.log(`APP URL http://localhost:4500`);
    });
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });
