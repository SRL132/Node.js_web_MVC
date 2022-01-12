const db = require("../models");

async function getUser(req, res, next) {
  try {
    const { email, uid } = req.user;

    const user = await db.User.find({ email: email, uid: uid }).lean().exec();

    if (user.length < 1) {
      await saveNewUser(email, uid);
      res.status(201).send({
        message: "User Added Successfully",
        userId: uid,
      });
    } else {
      res.status(201).send({
        message: "User Logged in",
        userId: uid,
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function saveNewUser(email, uid) {
  const user = await db.User.create({ email: email, uid: uid });

  return user;
}

module.exports = {
  getUser: getUser,
};
