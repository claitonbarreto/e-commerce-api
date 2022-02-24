import { ShoppingCart_Product } from "../domain/ShoppingCart_Product.entity";
import { GetShoppingCart_ProductsByIds } from "../interfaces/applications/get-shopping-cart-product-by-ids.application.interface";
import { ShoppingCart_ProductRepository } from "../interfaces/repository/shopping-cart_product.repository.interface";

export class GetShoppingCart_ProductsByIdsImpl implements GetShoppingCart_ProductsByIds {
    
        constructor(
            private readonly shoppingCart_productRepository: ShoppingCart_ProductRepository
        ) {}
    
        async getShoppingCart_ProductsByIds(shoppingCartId: string, productId: string): Promise<ShoppingCart_Product> {
    
            const shoppingCart_products = await this.shoppingCart_productRepository.getShoppingCart_ProductsByIds(shoppingCartId, productId)
    
            return shoppingCart_products
    
        }
    
}