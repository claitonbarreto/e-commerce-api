import { Request, Response } from "express";
import { UserRole } from "../user/enums/user-role.enum";
import { Customer } from "./domain/Customer.entity";
import { ListCustomersApplication } from "./interfaces/applications/list-customers-application.interface";
import { RegisterCustomerApplication } from "./interfaces/applications/register-customer-application.interface";
import { CustomerRepository } from "./interfaces/repository/customer-repository.interface";

export class CustomerController {
    constructor(
        private readonly registerCustomerApplication: RegisterCustomerApplication,
        private readonly listCustomersApplication: ListCustomersApplication,
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

    public async getCustomer(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const customer = await this.customerRepository.findById(id);
        return response.status(200).json(customer);
    }

    public async list(request: Request, response: Response): Promise<Response> {
        try {
            const customers = await this.listCustomersApplication.listCustomers();
            return response.status(200).json(customers);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}