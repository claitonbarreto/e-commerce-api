import jwt from 'jsonwebtoken';
import { CustomerRepository } from "../../customer/interfaces/repository/customer-repository.interface";
import { Auth } from "../domain/Auth";
import { AuthCustomerApplication } from "../interfaces/applications/auth-customer.application.interface";
import { AuthRepository } from "../interfaces/repository/auth-repository.interface";

export class AuthCustomerApplicationImpl implements AuthCustomerApplication {
    constructor(
        private customerRepository: CustomerRepository,
        private authRepository: AuthRepository,
    ) {}

    async authCustomer(auth: Auth): Promise<string> {
        
        const authenticated = await this.authRepository.authCustomer(auth);
        
        if (!authenticated) {
            throw new Error("Invalid credentials");
        }

        const customer = await this.customerRepository.findByEmail(auth.email);

        const token = jwt.sign({
            id: customer.id,
            name: customer.name,
        }, process.env.JWT_SECRET)

        return token;
    }
}