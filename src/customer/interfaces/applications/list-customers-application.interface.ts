import { Customer } from "../../domain/Customer.entity";

export interface ListCustomersApplication {
    listCustomers(): Promise<Customer[]>;
}