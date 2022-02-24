import { ShoppingCart } from "../../domain/ShoppingCart.entity";

export interface CreateShoppingCartApplication {
    createShoppingCart(shoppingCart: ShoppingCart): Promise<ShoppingCart>;
}