import { Customer } from "../../customer/domain/Customer.entity";
import { Product } from "../../product/domain/Product.entity";
import { ShoppingCartStatus } from "../enums/shopping-cart-status.enum";

export type ShoppingCartProps = {
    id?: string;
    customer: Customer;
    total: number;
    shelfLife: number;
    status: ShoppingCartStatus;
    products: Product[];
}
