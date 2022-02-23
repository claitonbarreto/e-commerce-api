import { Customer } from "../../domain/entities/Customer.entity";
import { User } from "../../domain/entities/User.entity";
import { CustomerApplication } from "../../interfaces/applications/customer-application.interface";
import { CustomerRepository } from "../../interfaces/repositories/customer-repository.interface";

export class RegisterCustomerApplication implements Pick<CustomerApplication, 'registerCustomer'> {

    constructor(
        private customerRepository: CustomerRepository,
    ) {}

    async registerCustomer(customer: Customer): Promise<void> {
        await this.customerRepository.create(customer);
    }
}