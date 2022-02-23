import { Request, Response } from "express";
import { Auth } from "./domain/Auth";
import { AuthCustomerApplication } from "./interfaces/applications/auth-customer.application.interface";

export class AuthController {
    constructor(
        private authCustomerApplication: AuthCustomerApplication
    ) { }

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
}