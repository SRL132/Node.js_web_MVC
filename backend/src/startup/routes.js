const express = require('express');

const authRouter = require("../routes/auth-routes");
const productRouter = require("../routes/product-routes");
const userRouter = require("../routes/user-routes");
const error = require('../middlewares/error-middleware');

module.exports = function (app) {
  app.use(express.json());
  app.use('/auth', authRouter);
  app.use('/products', productRouter);
  app.use('/users', userRouter);
  app.use(error);
}