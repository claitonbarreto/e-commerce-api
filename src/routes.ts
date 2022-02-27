import { Router } from "express";
import { authController, validateAdminUserApplication, validateCustomerApplication } from "./auth";
import { customerController } from "./customer";
import { productsController } from "./product";
import { shoppingCartController } from "./shopping-cart";
import { shoppingCartProductController } from "./shopping-cart_product";

const router = Router();

router.post('/auth/admin', (request, response) => authController.authAdmin(request, response));
router.post('/auth/customer', (request, response) => authController.authCustomer(request, response));

router.use((req,res,next) => validateAdminUserApplication.validate(req,res,next));
router.post('/products', (request, response) => productsController.createProduct(request, response));
router.get('/products', (request, response) => productsController.listProducts(request, response));

router.use((req,res,next) => validateCustomerApplication.validate(req,res,next));
router.post('/products/:productId/shopping_cart', (request, response) => shoppingCartProductController.addProductToShoppingCart(request, response));
router.post('/customer', (request, response) => customerController.registerCustomer(request, response));
router.get('/customer', (request, response) => customerController.list(request, response));
router.get('/customer/:customerId/shopping-cart', (request, response) => shoppingCartController.getShoppingCart(request, response));

export {
    router
}