import { Customer } from "../domain/Customer.entity";
import { User } from "../../user/domain/User";
import { CustomerApplication } from "../interfaces/applications/customer-application.interface";
import { CustomerRepository } from "../interfaces/repository/customer-repository.interface";
import { GetCustomerApplication } from "../interfaces/applications/get-customer-application.interface";

export class RegisterCustomerApplication implements Pick<CustomerApplication, 'registerCustomer'> {

    constructor(
        private customerRepository: CustomerRepository,
    ) {}

    async registerCustomer(customer: Customer): Promise<void> {
        await this.customerRepository.create(customer);
    }
}