import { CustomerRepositoryImpl } from "../customer/repository/customer.repository";
import { AuthCustomerApplicationImpl } from "./applications/auth-customer.application";
import { AuthController } from "./auth.controller";
import { AuthRepositoryImpl } from "./repository/auth.repository";

const customerRepository = new CustomerRepositoryImpl("customer");
const authRepository = new AuthRepositoryImpl(customerRepository)

const authCustomerApplication = new AuthCustomerApplicationImpl(customerRepository, authRepository);
const authController = new AuthController(authCustomerApplication)

export {
    authCustomerApplication,
    authController
}