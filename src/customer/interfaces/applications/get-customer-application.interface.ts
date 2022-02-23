import { Customer } from "../../domain/Customer.entity";

export interface GetCustomerApplication {
    getCustomer(id: string): Promise<Customer>;
}