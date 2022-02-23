import { Router } from "express";
import { authController, validateCustomerApplication } from "./auth";
import { customerController } from "./customer";

const router = Router();

router.post('/auth/customer', (request, response) => authController.authCustomer(request, response));

router.use((req,res,next) => validateCustomerApplication.validate(req,res,next));
router.post('/customer', (request, response) => customerController.registerCustomer(request, response));
router.get('/customer', (request, response) => customerController.list(request, response));

export {
    router
}