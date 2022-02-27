import jwt from 'jsonwebtoken';
import { AdminUser } from '../../admin-user/domain/AdminUser.entity';
import { Customer } from '../../customer/domain/Customer.entity';
import { ICreateTokenApplication } from "../interfaces/applications/create-token.application.interface";

export class CreateTokenApplication implements ICreateTokenApplication {
    async createToken(auth: AdminUser | Customer): Promise<string> {
        const { JWT_SECRET, JWT_SHELF_LIFE } = process.env

        const token = jwt.sign({payload: auth}, JWT_SECRET, {
            expiresIn: JWT_SHELF_LIFE,
        })

        return token;
    }
}