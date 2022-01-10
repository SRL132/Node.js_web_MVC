const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const ProductRouter = require("./routes/product-routes");
const UserRouter = require("./routes/user-routes");
const cors = require("cors");

const app = express();
const corsOpts = {
  origin: "*",
  allowedHeaders: "*",
};

app.use(cors(corsOpts));

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use("/products", ProductRouter);
app.use("/users", UserRouter);

require("./startup/routes")(app);
require("./startup/validation")();

module.exports = app;
