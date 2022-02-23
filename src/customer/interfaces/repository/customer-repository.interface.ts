import { IRepository } from "../../../core/interfaces/IRepository";
import { BaseRespoitory } from "../../../core/repositories/BaseRepository";
import { Customer } from "../../domain/Customer.entity";

export interface CustomerRepository extends IRepository<Customer> {
    findByEmail(email: string): Promise<Customer | undefined>;
}