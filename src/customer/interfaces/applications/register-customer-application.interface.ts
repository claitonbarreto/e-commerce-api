import { Customer } from "../../domain/Customer.entity";

export interface RegisterCustomerApplication {
    registerCustomer(customer: Customer): Promise<void>;
}