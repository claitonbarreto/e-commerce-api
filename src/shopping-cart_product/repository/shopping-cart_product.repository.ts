import { getConnection } from "typeorm";
import { BaseRespoitory } from "../../core/repositories/BaseRepository";
import { Product } from "../../product/domain/Product.entity";
import { ShoppingCart } from "../../shopping-cart/domain/ShoppingCart.entity";
import { ShoppingCart_Product } from "../domain/ShoppingCart_Product.entity";
import { ShoppingCart_ProductRepository } from "../interfaces/repository/shopping-cart_product.repository.interface";

export class ShoppingCart_ProductRepositoryImpl
extends BaseRespoitory<ShoppingCart_Product>
implements ShoppingCart_ProductRepository {
    async addProductToShoppingCart(shoppingCart: ShoppingCart, product: Product, quantity: number): Promise<ShoppingCart_Product> {
        
        const shoppingCartProduct = new ShoppingCart_Product({
            shoppingCart,
            product,
            quantity
        });
        
        const query = getConnection()
            .createQueryBuilder()
            .insert()
            .into(ShoppingCart_Product)
            .values(shoppingCartProduct)

        await query.execute()

        const shoppingCart_Product = new ShoppingCart_Product({
            quantity,
            shoppingCart,
            product
        })

        return shoppingCart_Product
    }

    async getShoppingCart_ProductsByIds(shoppingCartId: string, productId: string): Promise<ShoppingCart_Product> {
        const query = getConnection()
            .createQueryBuilder()
            .select('shopping_cart_products')
            .from(ShoppingCart_Product, 'shopping_cart_products')
            .where('shopping_cart_products.shoppingCartId = :shoppingCartId', { shoppingCartId })
            .andWhere('shopping_cart_products.productId = :productId', { productId })

        const shoppingCart_Product = await query.getOne()

        return shoppingCart_Product
    }

    async updateShoppingCart_Product(shoppingCartId: string, productId: string, quantity: number): Promise<void> {
        const query = getConnection()
            .createQueryBuilder()
            .update(ShoppingCart_Product)
            .set({ quantity })
            .where('shoppingCartId = :shoppingCartId', { shoppingCartId })
            .andWhere('productId = :productId', { productId })

        await query.execute()
    }
}