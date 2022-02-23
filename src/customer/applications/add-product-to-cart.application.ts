import { Customer } from "../domain/Customer.entity";
import { Product } from "../../product/domain/Product.entity";
import { ShoppingCart } from "../../shopping-cart/domain/ShoppingCart.entity";
import { ShoppingCartStatus } from "../../shopping-cart/enums/shopping-cart-status.enum";
import { CustomerApplication } from "../interfaces/applications/customer-application.interface";
import { ShoppingCartRepository } from "../../shopping-cart/interfaces/repository/shopping-cart-repository.interface";

export class AddProductToCart implements Pick<CustomerApplication, 'addProductToCart'>{
    constructor(
        private shoppingCartRepository: ShoppingCartRepository,
    ) {}

    async addProductToCart(customer: Customer, product: Product, quantity: number): Promise<void> {
        const shoppingCart = await this.shoppingCartRepository.findByCustomer(customer);
        if (!shoppingCart) {
            const newShoppingCart = new ShoppingCart({
                customer,
                products: [product],
                total: product.price * quantity,
                shelfLife: 10,
                status: ShoppingCartStatus.Open,
            });
            await this.shoppingCartRepository.create(newShoppingCart);
        } else {
            shoppingCart.products.push(product);
            shoppingCart.total += product.price * quantity;
            await this.shoppingCartRepository.update(shoppingCart);
        }
    }
}