import { ShoppingCart_Product } from "../../domain/ShoppingCart_Product.entity";

export interface GetShoppingCart_ProductsByIds {
    getShoppingCart_ProductsByIds(shoppingCartId:string, productId:string): Promise<ShoppingCart_Product>;
}