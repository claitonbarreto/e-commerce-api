import { IRepository } from "../../core/interfaces/IRepository";
import { Customer } from "../../domain/entities/Customer.entity";
import { ShoppingCart } from "../../domain/entities/ShoppingCart.entity";

export interface ShoppingCartRepository extends IRepository<ShoppingCart> {
    findByCustomer(customer: Customer): Promise<ShoppingCart | undefined>;
}