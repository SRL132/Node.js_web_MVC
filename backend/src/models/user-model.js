const Joi = require("joi");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  uid: {
    type: String,
    required: true,
  },
});

const UserModel = new mongoose.model("users", UserSchema);

function validateUser(user) {
  const schema = Joi.object({
    email: Joi.string().min(4).max(50).required(),
    uid: Joi.string().required(),
  });

  return schema.validate(user);
}

exports.UserModel = UserModel;
exports.validateUser = validateUser;
