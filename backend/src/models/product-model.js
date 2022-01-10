const Joi = require("joi");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
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
});

const ProductModel = new mongoose.model("products", ProductSchema);

function validateProduct(product) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(10).max(200).required(),
    price: Joi.number().required(),
    unitsInStock: Joi.number().required(),
  });

  return schema.validate(product);
}

module.exports = {
  ProductModel: ProductModel,
  validateProduct: validateProduct,
};
