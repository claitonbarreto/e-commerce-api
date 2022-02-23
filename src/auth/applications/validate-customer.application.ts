import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { CustomerRepository } from '../../customer/interfaces/repository/customer-repository.interface';

export class ValidateCustomerApplicationImpl {

    constructor(
        private customerRepository: CustomerRepository,
    ) {}

    async validate(request:Request, response: Response, next: NextFunction): Promise<Response> {

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
        
        const payload = jwt.decode(token) as any;

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

        next();
    }
}