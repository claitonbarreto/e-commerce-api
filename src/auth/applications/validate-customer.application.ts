import { NextFunction, Response } from 'express';
import { CustomerRepository } from '../../customer/interfaces/repository/customer-repository.interface';
import { UserRole } from '../../user/enums/user-role.enum';
import { AuthenticatedRequest } from '../../core/types/AuthenticatedRequest.type';
import { ValidadeCustomerApplicationInterface } from '../interfaces/applications/validate-customer.application.interface';
import { IDecodeTokenApplication } from '../../token/interfaces/applications/decode-token.application.interface';
import { Customer } from '../../customer/domain/Customer.entity';

export class ValidateCustomerApplicationImpl implements ValidadeCustomerApplicationInterface {

    constructor(
        private customerRepository: CustomerRepository,
        private decodeTokenApplication: IDecodeTokenApplication
    ) {}

    async validate(request:AuthenticatedRequest, response: Response, next: NextFunction): Promise<Response> {

        const rawToken = request.headers.authorization

        if (!rawToken) {
            return response.status(401).json({
                message: "Unauthorized"
            });
        }

        const token = rawToken.split(' ')[1]

        if (!token) {
            return response.status(401).json({
                message: "Unauthorized"
            });
        }
        
        const payload = await this.decodeTokenApplication.decodeToken<Customer>(token);

        if (!payload) {
            return response.status(401).json({
                message: "Unauthorized"
            });
        }

        const customer = await this.customerRepository.findById(payload.id);
        
        if(!customer) {
            return response.status(400).json({
                message: "Invalid credentials"
            });
        }

        request.user = {
            id: customer.id,
            name: customer.name,
            email: customer.email,
            password: customer.password,
            role: UserRole.Customer,
        };

        next();
    }
}