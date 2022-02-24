import { CustomerRepository } from "../../customer/interfaces/repository/customer-repository.interface";
import { ShoppingCart } from "../domain/ShoppingCart.entity";
import { CreateShoppingCartApplication } from "../interfaces/applications/create-shopping-cart.application.interface";
import { ShoppingCartRepository } from "../interfaces/repository/shopping-cart-repository.interface";

export class CreateShoppingCartApplicationImpl implements CreateShoppingCartApplication {

    constructor(
        private readonly shoppingCartRepository: ShoppingCartRepository,
        private readonly customerRepository: CustomerRepository
    ) {}

    async createShoppingCart(shoppingCart: ShoppingCart): Promise<ShoppingCart> {
        return await this.shoppingCartRepository.create(shoppingCart);
    }
}