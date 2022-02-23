import { IRepository } from "../../../core/interfaces/IRepository";
import { Customer } from "../../../customer/domain/Customer.entity";
import { ShoppingCart } from "../../domain/ShoppingCart.entity";

export interface ShoppingCartRepository extends IRepository<ShoppingCart> {
    findByCustomer(customer: Customer): Promise<ShoppingCart | undefined>;
}