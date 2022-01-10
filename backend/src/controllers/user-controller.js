const db = require("../models");

async function getUser(req, res, next) {
  try {
    // const products = await db.Product.find().lean().exec();

    res.status(201).send({
      data: "Hello",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = {
  getUser: getUser,
};
