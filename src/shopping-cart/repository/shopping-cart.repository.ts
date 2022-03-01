import { createQueryBuilder } from "typeorm";
import { BaseRespoitory } from "../../core/repositories/BaseRepository";
import { ShoppingCart_Product } from "../../shopping-cart_product/domain/ShoppingCart_Product.entity";
import { ShoppingCart } from "../domain/ShoppingCart.entity";
import { ShoppingCartRepository } from "../interfaces/repository/shopping-cart-repository.interface";

export class ShoppingCartRepositoryImpl
extends BaseRespoitory<ShoppingCart>
implements ShoppingCartRepository {
    async findByCustomer(customerId: string): Promise<ShoppingCart | undefined> {

        const query = createQueryBuilder(ShoppingCart, "shoppingCart")
            .innerJoinAndSelect("shoppingCart.customer", "customer")
            .innerJoinAndSelect("shoppingCart.shoppingCartProducts", "products")
            .innerJoinAndSelect("products.product", "product")
            .where("customer.id = :customerId", { customerId })

        return await query.getOne();
    }

    async deleteProduct(shoppingCartId: string, productId: string): Promise<ShoppingCart | undefined> {
            
            const query = createQueryBuilder(ShoppingCart_Product, "shoppingCartProduct")
                .innerJoinAndSelect("shoppingCartProduct.shoppingCart", "shoppingCart")
                .innerJoinAndSelect("shoppingCartProduct.product", "product")
                .where("shoppingCart.id = :shoppingCartId", { shoppingCartId })
                .andWhere("product.id = :productId", { productId })
                .delete()

            await query.execute();
    
            return await this.findById(shoppingCartId);
    }
}