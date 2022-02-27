import { AdminUserRepository } from "../admin-user/repository/admin-user.repository";
import { CustomerRepositoryImpl } from "../customer/repository/customer.repository";
import { AuthAdminApplicationImpl } from "./applications/auth-admin.application";
import { AuthCustomerApplicationImpl } from "./applications/auth-customer.application";
import { ValidateAdminUserApplication } from "./applications/validate-admin-user.application";
import { ValidateCustomerApplicationImpl } from "./applications/validate-customer.application";
import { AuthController } from "./auth.controller";
import { AuthRepositoryImpl } from "./repository/auth.repository";

const customerRepository = new CustomerRepositoryImpl("customer");
const adminUserRepository = new AdminUserRepository("admin_user");
const authRepository = new AuthRepositoryImpl(customerRepository, adminUserRepository)

const authCustomerApplication = new AuthCustomerApplicationImpl(customerRepository, authRepository);
const authAdminApplication = new AuthAdminApplicationImpl(authRepository, adminUserRepository);
const validateCustomerApplication = new ValidateCustomerApplicationImpl(customerRepository);
const validateAdminUserApplication = new ValidateAdminUserApplication(adminUserRepository);
const authController = new AuthController(authCustomerApplication, authAdminApplication)

export {
    authCustomerApplication,
    validateCustomerApplication,
    validateAdminUserApplication,
    authController
}