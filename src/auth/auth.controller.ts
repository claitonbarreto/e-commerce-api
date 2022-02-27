import { Request, Response } from "express";
import { AuthAdminApplicationImpl } from "./applications/auth-admin.application";
import { Auth } from "./domain/Auth";
import { AuthCustomerApplication } from "./interfaces/applications/auth-customer.application.interface";

export class AuthController {
    constructor(
        private authCustomerApplication: AuthCustomerApplication,
        private authAdminApplication: AuthAdminApplicationImpl
    ) {}

    async authCustomer(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        try {
            const auth = new Auth({
                email,
                password
            });
            
            const token = await this.authCustomerApplication.authCustomer(auth);
            
            return response.status(200).json({token});
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }

    async authAdmin(request: Request, response: Response): Promise<Response> {

        const { register, password } = request.body;

        try {
            const auth = new Auth({
                register,
                password
            });
            
            const token = await this.authAdminApplication.authAdmin(auth);
            
            return response.status(200).json({token});
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}