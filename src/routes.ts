import { Router } from "express";
import { authController, validateCustomerApplication } from "./auth";
import { customerController } from "./customer";

const router = Router();

router.post('/auth/customer', (request, response) => authController.authCustomer(request, response));

router.use(validateCustomerApplication.validate);
router.post('/customer', (request, response) => customerController.registerCustomer(request, response));

export {
    router
}