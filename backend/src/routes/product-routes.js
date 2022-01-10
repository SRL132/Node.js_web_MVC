const Router = require("express").Router;

/**
 * Finish the route handlers to use the controllers specified
 * and assign the right endpoints for each one
 */

// use the controller for each route
const productController = require("../controllers/product-controller");

const ProductRouter = Router();

//  GET `/products` Get all the products: `getProducts()` controller
ProductRouter.get("/", productController.getProducts);

//  GET `/products/:productId` Get a single product by its ID: `getSingleProduct()` controller
ProductRouter.get("/:bookId", productController.getSingleProduct);

//  POST `/products` Create a product: `createProduct()` controller
ProductRouter.post("/", productController.createProduct);

//  PATCH `/products/:productId` Update a product by its id: `updateProduct()` controller
ProductRouter.patch("/:productId", productController.updateProduct);

//  DELETE `/products/:productId` Delete a product by its id: `deleteProduct()` controller
ProductRouter.delete("/:productId", productController.deleteProduct);

module.exports = ProductRouter;
