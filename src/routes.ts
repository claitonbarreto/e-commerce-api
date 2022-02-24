import { Router } from "express";
import { authController, validateCustomerApplication } from "./auth";
import { customerController } from "./customer";
import { productsController } from "./product";

const router = Router();

router.post('/auth/customer', (request, response) => authController.authCustomer(request, response));

router.post('/products', (request, response) => productsController.createProduct(request, response));
router.get('/products', (request, response) => productsController.listProducts(request, response));

router.use((req,res,next) => validateCustomerApplication.validate(req,res,next));
router.post('/customer', (request, response) => customerController.registerCustomer(request, response));
router.get('/customer', (request, response) => customerController.list(request, response));

export {
    router
}