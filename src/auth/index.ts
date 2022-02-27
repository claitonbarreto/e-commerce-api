import { AdminUserRepository } from "../admin-user/repository/admin-user.repository";
import { CustomerRepositoryImpl } from "../customer/repository/customer.repository";
import { CreateTokenApplication } from "../token/applications/create-token.application";
import { DecodeTokenApplication } from "../token/applications/decode-token.application";
import { AuthAdminApplicationImpl } from "./applications/auth-admin.application";
import { AuthCustomerApplicationImpl } from "./applications/auth-customer.application";
import { ValidateAdminUserApplication } from "./applications/validate-admin-user.application";
import { ValidateCustomerApplicationImpl } from "./applications/validate-customer.application";
import { AuthController } from "./auth.controller";
import { AuthRepositoryImpl } from "./repository/auth.repository";

const customerRepository = new CustomerRepositoryImpl("customer");
const adminUserRepository = new AdminUserRepository("admin_user");
const authRepository = new AuthRepositoryImpl(customerRepository, adminUserRepository)

const createTokenApplication = new CreateTokenApplication()
const decodeTokenApplication = new DecodeTokenApplication()
const authCustomerApplication = new AuthCustomerApplicationImpl(customerRepository, authRepository, createTokenApplication);
const authAdminApplication = new AuthAdminApplicationImpl(authRepository, adminUserRepository, createTokenApplication);
const validateCustomerApplication = new ValidateCustomerApplicationImpl(customerRepository, decodeTokenApplication);
const validateAdminUserApplication = new ValidateAdminUserApplication(adminUserRepository, decodeTokenApplication);
const authController = new AuthController(authCustomerApplication, authAdminApplication)

export {
    authCustomerApplication,
    validateCustomerApplication,
    validateAdminUserApplication,
    authController
}