import { getConnection } from "typeorm";
import { BaseRespoitory } from "../../core/repositories/BaseRepository";
import { AdminUser } from "../domain/AdminUser.entity";
import { AdminUserRepositoryInterface } from "../interfaces/admin-user.repository.interface";

export class AdminUserRepository 
extends BaseRespoitory<AdminUser>
implements AdminUserRepositoryInterface {
    findByRegister(register: string): Promise<AdminUser> {
        const query = getConnection()
            .createQueryBuilder()
            .select("admin_user")
            .from(AdminUser, "admin_user")
            .where("admin_user.register = :register", { register });

        return query.getOne();
    }
}