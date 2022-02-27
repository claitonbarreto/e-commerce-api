import jwt from 'jsonwebtoken';
import { AdminUserRepositoryInterface } from "../../admin-user/interfaces/admin-user.repository.interface";
import { Auth } from "../domain/Auth";
import { AuthAdmin } from "../interfaces/applications/auth-admin.application.interface";
import { AuthRepository } from "../interfaces/repository/auth-repository.interface";

export class AuthAdminApplicationImpl implements AuthAdmin {

    constructor(
        private authRepository: AuthRepository,
        private adminUserRepository: AdminUserRepositoryInterface,
    ) {}

    public async authAdmin(auth: Auth): Promise<string> {   
        const authenticated = await this.authRepository.authAdmin(auth);

        if (!authenticated) {
            throw new Error("Invalid credentials");
        }

        const adminUser = await this.adminUserRepository.findByRegister(auth.register);

        const token = jwt.sign({
            id: adminUser.id,
            name: adminUser.register,
        }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        })

        return token;
    }
}