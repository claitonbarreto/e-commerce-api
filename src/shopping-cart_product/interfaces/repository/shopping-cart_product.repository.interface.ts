import { IRepository } from "../../../core/interfaces/IRepository";
import { Product } from "../../../product/domain/Product.entity";
import { ShoppingCart } from "../../../shopping-cart/domain/ShoppingCart.entity";
import { ShoppingCart_Product } from "../../domain/ShoppingCart_Product.entity";

export interface ShoppingCart_ProductRepository extends IRepository<ShoppingCart_Product> {
    addProductToShoppingCart(shoppingCart: ShoppingCart, product: Product, quantity: number): Promise<ShoppingCart_Product>;
    getShoppingCart_ProductsByIds(shoppingCartId: string, productId: string): Promise<ShoppingCart_Product>;
    updateShoppingCart_Product(shoppingCartProduct: ShoppingCart_Product): Promise<void>;
}