import { ProductRepository } from "../../product/interfaces/repository/product-repository.interface";
import { ShoppingCart } from "../domain/ShoppingCart.entity";
import { IDeleteProductFromShoppingCartApplication } from "../interfaces/applications/delete-product-from-shopping-cart.application.interface";
import { ShoppingCartRepository } from "../interfaces/repository/shopping-cart-repository.interface";

export class DeleteProductFromShoppingCartApplication
implements IDeleteProductFromShoppingCartApplication {

    constructor(
        private readonly shoppingCartRepository: ShoppingCartRepository,
        private readonly productRepository: ProductRepository
    ) { }

    async deleteProductFromShoppingCart(shoppingCartId: string, productId: string): Promise<ShoppingCart | undefined> {
        const shoppingCart = await this.shoppingCartRepository.findById(shoppingCartId);

        if (!shoppingCart) {
            return undefined;
        }

        const product = await this.productRepository.findById(productId);

        if (!product) {
            return undefined;
        }

        const newShoppingCart = await this.shoppingCartRepository.deleteProduct(shoppingCart.id, product.id);

        return newShoppingCart;
    }
}