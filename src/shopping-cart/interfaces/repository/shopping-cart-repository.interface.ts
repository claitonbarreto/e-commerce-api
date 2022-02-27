import { IRepository } from "../../../core/interfaces/IRepository";
import { ShoppingCart } from "../../domain/ShoppingCart.entity";

export interface ShoppingCartRepository extends IRepository<ShoppingCart> {
    findByCustomer(customerId:string): Promise<ShoppingCart | undefined>;
}