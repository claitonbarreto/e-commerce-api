import { Router } from "express";
import { authController } from "./auth";
import { customerController } from "./customer";

const router = Router();

router.post('/auth/customer', (request, response) => authController.authCustomer(request, response));
router.post('/customer', (request, response) => customerController.registerCustomer(request, response));

export {
    router
}