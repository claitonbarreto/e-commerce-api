import { ListCustomersApplicationImpl } from "./applications/list-customers.application";
import { RegisterCustomerApplication } from "./applications/register-customer.application";
import { CustomerController } from "./customer.controller";
import { CustomerRepositoryImpl } from "./repository/customer.repository";

const customerRepository = new CustomerRepositoryImpl("customer")
const registerCustomerApplication = new RegisterCustomerApplication(customerRepository);
const listCustomersApplication = new ListCustomersApplicationImpl(customerRepository);

const customerController = new CustomerController(
    registerCustomerApplication,
    listCustomersApplication, 
    customerRepository
);

export {
    registerCustomerApplication,
    customerController
}