import { ShoppingCart } from "../../domain/ShoppingCart.entity";

export interface IDeleteProductFromShoppingCartApplication {
    deleteProductFromShoppingCart(shoppingCartId: string, productId: string): Promise<ShoppingCart | undefined>;
}