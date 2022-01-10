const express = require('express');

// const productRouter = require("../routes/product-routes");
// const userRouter = require("../routes/user-routes");
// const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  // app.use('/products', productRouter);
  // app.use('/users', userRouter);
  // app.use(error);
}