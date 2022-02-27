import { NextFunction, Response } from "express";
import { AdminUserRepositoryInterface } from "../../admin-user/interfaces/admin-user.repository.interface";
import { AuthenticatedRequest } from "../../core/types/AuthenticatedRequest.type";
import { ValidateAdminUserApplicationInterface } from "../interfaces/applications/validate-admin-user.application.interface";
import { UserRole } from '../../user/enums/user-role.enum';
import { IDecodeTokenApplication } from '../../token/interfaces/applications/decode-token.application.interface';
import { AdminUser } from '../../admin-user/domain/AdminUser.entity';

export class ValidateAdminUserApplication implements ValidateAdminUserApplicationInterface {

    constructor(
        private adminUserRepository: AdminUserRepositoryInterface,
        private decodeTokenApplication: IDecodeTokenApplication
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

            const payload = await this.decodeTokenApplication.decodeToken<AdminUser>(token);

            if (!payload) {
                return response.status(401).json({
                    message: "Unauthorized"
                });
            }

            const adminUser = await this.adminUserRepository.findById(payload.id);
            
            if(!adminUser) {
                return response.status(400).json({
                    message: "Invalid credentials"
                });
            }

            if(adminUser.role !== UserRole.Admin) 
                return response.status(401).json({
                    message: "Unauthorized" 
                })

            request.admin = {
                id: adminUser.id,
                register: adminUser.register,
                password: adminUser.password,
                role: UserRole.Admin,
                sector: adminUser.sector,
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