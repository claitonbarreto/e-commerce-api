import { IRepository } from "../../core/interfaces/IRepository";
import { Customer } from "../../domain/entities/Customer.entity";

export interface CustomerRepository extends IRepository<Customer> {
    findByEmail(email: string): Promise<Customer | undefined>;
}