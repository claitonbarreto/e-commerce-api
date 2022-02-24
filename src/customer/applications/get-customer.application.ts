import { Customer } from "../domain/Customer.entity";
import { GetCustomerApplication } from "../interfaces/applications/get-customer-application.interface";
import { CustomerRepository } from "../interfaces/repository/customer-repository.interface";

export class GetCustomerApplicationImpl implements GetCustomerApplication {
    constructor(
        private readonly customerRepository: CustomerRepository
    ) {}

    async getCustomer(customerId: string): Promise<Customer> {
        return await this.customerRepository.findById(customerId);
    }
}