import { AdminUser } from "../../../admin-user/domain/AdminUser.entity";
import { Auth } from "../../domain/Auth";

export interface AuthAdmin {
    authAdmin(auth: Auth): Promise<AdminUser>;
}