const db = require("../models");
const { logger } = require("../config/config");
const { validateProduct } = require("../models/product-model");

async function createProduct(req, res, next) {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const {
      id,
      title,
      shortDescription,
      price,
      img,
      unitsInStock,
      createdAt,
      updatedAt,
    } = req.body;
    const product = await db.Product.create({
      id: id,
      title: title,
      shortDescription: shortDescription,
      price: price,
      img: img,
      unitsInStock: unitsInStock,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });

    console.log(req.body);
    res.status(201).send({
      data: product.id,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    const products = await db.Product.find().lean().exec();

    res.status(201).send({
      data: products,
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
      description: 1,
      price: 1,
      unitsInStock: 1,
    });

    res.status(200).send({
      data: product,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    const { productId } = req.params;
    const { title, description } = req.body;

    const updatedProduct = await db.Product.findOneAndUpdate(
      { _id: productId },
      {
        $set: {
          title: title,
          description: description,
        },
      },
      { new: true },
    );

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
    const { productId } = req.params;

    const deletedProduct = await db.Product.findOneAndDelete({
      _id: productId,
    });

    res.status(200).send({
      data: { _id: deletedProduct._id },
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function checkout(req, res, next) {
  console.log("Checkout");
  console.log(req.params);
  try {
    const products = await db.Product.findById(req.params.productId);

    res.status(201).send({
      data: products,
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
  checkout: checkout,
};
