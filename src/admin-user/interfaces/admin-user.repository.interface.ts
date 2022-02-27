import { BaseRespoitory } from "../../core/repositories/BaseRepository";
import { AdminUser } from "../domain/AdminUser.entity";

export interface AdminUserRepositoryInterface extends BaseRespoitory<AdminUser>{
    findByRegister(register: string): Promise<AdminUser>;
}