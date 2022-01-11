const Router = require("express").Router;

const authMiddleware = require("../middleware/authMiddleware");

/**
 * Finish the route handlers to use the controllers specified
 * and assign the right endpoints for each one
 */

// use the controller for each route
const userController = require("../controllers/user-controller");

const UserRouter = Router();

UserRouter.use(authMiddleware);

//  GET `/products` Get all the products: `getProducts()` controller
UserRouter.get("/", userController.getUser);

//  GET `/products/:productId` Get a single product by its ID: `getSingleProduct()` controller
// UserRouter.get("/:userId", userController.getUser);

//  POST `/products` Create a product: `createProduct()` controller
// UserRouter.post("/", userController.getUser);

//  PATCH `/products/:productId` Update a product by its id: `updateProduct()` controller
// UserRouter.patch("/:userId", userController.getUser);

//  DELETE `/products/:productId` Delete a product by its id: `deleteProduct()` controller
// UserRouter.delete("/:userId", userController.getUser);

UserRouter.post("/sync", userController.getUser);

module.exports = UserRouter;
