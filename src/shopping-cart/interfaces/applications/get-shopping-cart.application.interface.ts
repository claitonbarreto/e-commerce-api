import { ShoppingCart } from "../../domain/ShoppingCart.entity";

export interface GetShoppingCartApplication {
    getShoppingCart(customerId: string): Promise<ShoppingCart | undefined>;
}