import { Customer } from "../../domain/entities/Customer.entity";
import { Product } from "../../domain/entities/Product.entity";
import { User } from "../../domain/entities/User.entity";

export interface CustomerApplication {
    registerCustomer(customer: Customer): Promise<void>;
    addProductToCart(customer: Customer, product: Product, quantity: number): Promise<void>;
}