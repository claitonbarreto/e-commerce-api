import { AdminUser } from "../../domain/AdminUser.entity";

export interface CreateAdminUserApplicationInterface {
    createAdminUser(adminUser: AdminUser): Promise<void>;
}