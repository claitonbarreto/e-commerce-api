import { ShoppingCart } from "../../shopping-cart/domain/ShoppingCart.entity";
import { ShoppingCartRepository } from "../../shopping-cart/interfaces/repository/shopping-cart-repository.interface";
import { IGetCustomerShoppingCartApplication } from "../interfaces/applications/get-customer-shopping-cart.application.interface";

export class GetCustomerShoppingCartApplication
implements IGetCustomerShoppingCartApplication {
    constructor(
        private readonly shoppingCartRepository: ShoppingCartRepository
    ) {}

    async getShoppingCart(customerId: string): Promise<ShoppingCart | undefined> {
        return await this.shoppingCartRepository.findByCustomer(customerId);
    }
}