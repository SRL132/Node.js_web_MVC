const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const ProductRouter = require("./routes/product-routes");

// const productRouter = require("./routes/product-routes");
// const userRouter = require("./routes/user-routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use("/products", ProductRouter);
// app.use('/users', userRouter);

require("./startup/routes")(app);
require("./startup/validation")();

module.exports = app;
