import { AdminUser } from "../../admin-user/domain/AdminUser.entity";
import { AdminUserRepositoryInterface } from "../../admin-user/interfaces/admin-user.repository.interface";
import { Customer } from "../../customer/domain/Customer.entity";
import { CustomerRepository } from "../../customer/interfaces/repository/customer-repository.interface";
import { Auth } from "../domain/Auth";
import { AuthRepository } from "../interfaces/repository/auth-repository.interface";

export class AuthRepositoryImpl implements AuthRepository {

    constructor(
        private customerRepository: CustomerRepository,
        private adminUserRepository: AdminUserRepositoryInterface,
    ) {}

    async authCustomer(auth: Auth): Promise<Customer> {
        const customer = await this.customerRepository.findByEmail(auth.email);

        if (!customer) {
            throw new Error("Invalid credentials");
        }

        if(customer.password !== auth.password) {
            throw new Error("Invalid credentials");
        }

        return customer;
    }

    async authAdmin(auth: Auth): Promise<AdminUser> {
        const adminUser = await this.adminUserRepository.findByRegister(auth.register);

        if (!adminUser) {
            throw new Error("Invalid credentials");
        }

        if(adminUser.password !== auth.password) {
            throw new Error("Invalid credentials");
        }

        return adminUser;
    }
}