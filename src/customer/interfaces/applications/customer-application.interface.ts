import { Customer } from "../../domain/Customer.entity";
import { Product } from "../../../product/domain/Product.entity";

export interface CustomerApplication {
    registerCustomer(customer: Customer): Promise<void>;
    addProductToCart(customer: Customer, product: Product, quantity: number): Promise<void>;
    getCustomer(id:string): Promise<Customer>;
}