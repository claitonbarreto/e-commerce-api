import { ProductRepository } from "../../product/interfaces/repository/product-repository.interface";
import { ShoppingCart_Product } from "../domain/ShoppingCart_Product.entity";
import { ShoppingCartRepository } from "../../shopping-cart/interfaces/repository/shopping-cart-repository.interface";
import { AddProductToShoppingCart } from "../interfaces/applications/add-product-to-shopping-cart.application.interface";
import { ShoppingCart_ProductRepository } from "../interfaces/repository/shopping-cart_product.repository.interface";

export class AddProductToShoppingCartImpl implements AddProductToShoppingCart {

    constructor(
        private readonly shoppingCartRepository: ShoppingCartRepository,
        private readonly productRepository: ProductRepository,
        private readonly shoppingCart_productRepository: ShoppingCart_ProductRepository
    ) {}

    async addProductToShoppingCart(shoppingCartId: string, productId: string, quantity: number): Promise<ShoppingCart_Product> {

        const product = await this.productRepository.findById(productId)
        if (!product) throw new Error('Product not found.')

        const shoppingCart = await this.shoppingCartRepository.findById(shoppingCartId)
        if(!shoppingCart) throw new Error('Shopping cart not found.')

        let shoppingCartProduct = await this.shoppingCart_productRepository.getShoppingCart_ProductsByIds(shoppingCartId, productId)

        if (shoppingCartProduct) {
            shoppingCartProduct.quantity += quantity
            await this.shoppingCart_productRepository.updateShoppingCart_Product(shoppingCartId, productId, quantity)
        } else {
            shoppingCartProduct = await this.shoppingCart_productRepository.addProductToShoppingCart(shoppingCart, product, quantity)
        }


        shoppingCart.total = parseFloat(shoppingCart.total.toString()) + (product.price * shoppingCartProduct.quantity)
        await this.shoppingCartRepository.update(shoppingCart)

        return shoppingCartProduct

    }
}