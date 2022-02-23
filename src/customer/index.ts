import { RegisterCustomerApplication } from "./applications/register-customer.application";
import { CustomerController } from "./customer.controller";
import { CustomerRepositoryImpl } from "./repository/customer.repository";

const customerRepository = new CustomerRepositoryImpl("customer")
const registerCustomerApplication = new RegisterCustomerApplication(customerRepository);

const customerController = new CustomerController(registerCustomerApplication, customerRepository);

export {
    registerCustomerApplication,
    customerController
}