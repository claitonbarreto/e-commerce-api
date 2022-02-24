import { ShoppingCart_Product } from "../../domain/ShoppingCart_Product.entity";

export interface AddProductToShoppingCart {
    addProductToShoppingCart(shoppingCartId: string, productId: string, quantity: number): Promise<ShoppingCart_Product>;
}