import jwt from 'jsonwebtoken';
import { NextFunction, Response } from "express";
import { AdminUserRepositoryInterface } from "../../admin-user/interfaces/admin-user.repository.interface";
import { AuthenticatedRequest } from "../../core/types/AuthenticatedRequest.type";
import { ValidateAdminUserApplicationInterface } from "../interfaces/applications/validate-admin-user.application.interface";
import { UserRole } from '../../user/enums/user-role.enum';

export class ValidateAdminUserApplication implements ValidateAdminUserApplicationInterface {

    constructor(
        private adminUserRepository: AdminUserRepositoryInterface,
    ) {}
   
    async validate(request: AuthenticatedRequest, response: Response, next: NextFunction): Promise<Response> {

        try {

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

            jwt.verify(token, process.env.JWT_SECRET);
            
            const payload = jwt.decode(token) as {id:string};

            if (!payload) {
                return response.status(401).json({
                    message: "Unauthorized"
                });
            }

            const customer = await this.adminUserRepository.findById(payload.id);
            
            if(!customer) {
                return response.status(400).json({
                    message: "Invalid credentials"
                });
            }

            if(customer.role !== UserRole.Admin) 
                return response.status(401).json({
                    message: "Unauthorized" 
                })

            request.admin = {
                id: customer.id,
                register: customer.register,
                password: customer.password,
                role: UserRole.Admin,
                sector: customer.sector,
            };

            next();
        } catch (error) {
            return response.status(401).json({
                message: "Unauthorized",
                details: error.message
            });
        }
    }
}