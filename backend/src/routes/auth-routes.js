const express = require("express");

const AuthRouter = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth-middleware");

// controller
const { createOrUpdateUser, currentUser } = require("../controllers/auth-controller");

AuthRouter.post("/create-or-update-user", authCheck, createOrUpdateUser);
AuthRouter.post("/current-user", authCheck, currentUser);
AuthRouter.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = AuthRouter;
