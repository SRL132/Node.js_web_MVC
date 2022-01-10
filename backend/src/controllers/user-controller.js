const db = require("../models");
const { logger } = require("../config/config");

async function createUser(req, res, next) {
  try {
    const data = req.body;
    console.log(data);

    const dbRes = await db.User.create(data);

    res.status(201).send({
      success: true,
      data: dbRes,
    });
  }
  catch (err) {
    console.log(err);
    next(err);
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await db.User.find()
      .select({ author: 1 })
      .lean()
      .exec();

    res.status(200).send({
      data: users
    });
  }
  catch (err) {
    console.log(err);
    next(err);
  }
}

async function getSingleUser(req, res, next) {
  try {
    const { userId } = req.params;

    const user = await db.User.findById(userId)
      .select({ author: 1 })
      .lean()
      .exec();

    res.status(200).send({
      data: user
    });
  }
  catch (err) {
    console.log(err);
    next(err);
  }
}

async function updateUser(req, res, next) {
  try {
    const { userId } = req.params;
    const data = req.body;

    const updatedUser = await db.User.findOneAndUpdate(
      { _id: userId },
      {
        $set: data,
      },
      { new: true },
    );

    res.status(200).send({
      data: updatedUser,
    });
  }
  catch (err) {
    console.log(err);
    next(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    const { userId } = req.params;

    const deletedUser = await db.User.findByIdAndDelete({ _id: userId });

    res.status(200).send({
      data: { _id: deletedUser._id },
    });
  }
  catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  getSingleUser: getSingleUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
