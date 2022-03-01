import { createQueryBuilder } from "typeorm";
import { BaseRespoitory } from "../../core/repositories/BaseRepository";
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
}