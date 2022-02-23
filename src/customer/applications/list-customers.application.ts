import { Customer } from "../domain/Customer.entity";
import { ListCustomersApplication } from "../interfaces/applications/list-customers-application.interface";
import { CustomerRepository } from "../interfaces/repository/customer-repository.interface";

export class ListCustomersApplicationImpl implements ListCustomersApplication {
    
    constructor(
        private readonly customerRepository: CustomerRepository,
    ) {}

    public async listCustomers(): Promise<Customer[]> {
        const customers = await this.customerRepository.findAll();
        return customers;
    }
}