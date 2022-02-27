import { AdminUser } from "../../../admin-user/domain/AdminUser.entity";
import { Customer } from "../../../customer/domain/Customer.entity";

export interface ICreateTokenApplication {
    createToken(auth: AdminUser | Customer): Promise<string>;
}