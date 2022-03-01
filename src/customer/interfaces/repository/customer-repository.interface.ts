import { IRepository } from "../../../core/interfaces/IRepository";
import { Customer } from "../../domain/Customer.entity";

export interface CustomerRepository extends IRepository<Customer> {
    findByEmail(email: string): Promise<Customer | undefined>;
    findByIdWithShoppingCart(id: string): Promise<Customer | undefined>;
}