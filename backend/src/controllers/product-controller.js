const db = require("../models");
const { logger } = require("../config/config");
const { validate } = require("../models/product-model");

async function createProduct(req, res, next) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body);
  console.log(error);

  try {
    const product = req.body;

    const dbRes = await db.Product.create(product);

    res.status(201).send({
      data: "Item Added Successfully",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function getProducts(req, res, next) {
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

async function getSingleProduct(req, res, next) {
  try {
    const { productId } = req.params;

    const product = await db.Product.findById(productId).select({
      title: 1,
      pages: 1,
    });

    res.status(200).send({
      data: book,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    // const { productId } = req.params;
    // const { title, pages } = req.body;

    // const updatedProduct = await db.Product.findOneAndUpdate(
    //   { _id: productId },
    //   {
    //     $set: {
    //       title: title,
    //       pages: pages,
    //     },
    //   },
    //   { new: true },
    // );

    res.status(200).send({
      data: updatedProduct,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const { bookId } = req.params;

    const deletedBook = await db.Book.findOneAndDelete({ _id: bookId });

    res.status(200).send({
      data: { _id: deletedBook._id },
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = {
  createProduct: createProduct,
  getProducts: getProducts,
  getSingleProduct: getSingleProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};
