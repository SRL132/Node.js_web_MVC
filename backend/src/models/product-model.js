const Joi = require("joi");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  unitsInStock: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

const ProductModel = new mongoose.model("product", ProductSchema);

function validateProduct(product) {
  const schema = Joi.object({
    id: Joi.string().required(),
    title: Joi.string().min(5).max(50).required(),
    shortDescription: Joi.string().min(10).max(200).required(),
    price: Joi.number().required(),
    unitsInStock: Joi.number().required(),
    createdAt: Joi.date().required(),
    updatedAt: Joi.date().required(),
  });

  return schema.validate(product);
}

exports.ProductModel = ProductModel;
exports.validateProduct = validateProduct;
