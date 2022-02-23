import { AdminUser } from "../../../admin-user/domain/AdminUser.entity";
import { Customer } from "../../../customer/domain/Customer.entity";
import { Auth } from "../../domain/Auth";

export interface AuthRepository {
    authAdmin(auth: Auth): Promise<AdminUser>;
    authCustomer(auth: Auth): Promise<Customer>;
}