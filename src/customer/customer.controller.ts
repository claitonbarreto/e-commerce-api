import { Request, Response } from "express";
import { UserRole } from "../user/enums/user-role.enum";
import { Customer } from "./domain/Customer.entity";
import { RegisterCustomerApplication } from "./interfaces/applications/register-customer-application.interface";
import { CustomerRepository } from "./interfaces/repository/customer-repository.interface";

export class CustomerController {
    constructor(
        private readonly registerCustomerApplication: RegisterCustomerApplication,
        private readonly customerRepository: CustomerRepository
    ) { }

    public async registerCustomer(request: Request, response: Response): Promise<Response> {
        const { name, email, password, cpf, address, phone } = request.body;

        const customer = new Customer({
            name,
            email, 
            password,
            role: UserRole.Customer,
            cpf,
            address,
            phone
        });

        const persistedCustomer = await this.registerCustomerApplication.registerCustomer(customer);        
        return response.status(201).json(persistedCustomer);
    }

    public async findById(customerId: string): Promise<Customer> {
        return this.customerRepository.findById(customerId);
    }
}