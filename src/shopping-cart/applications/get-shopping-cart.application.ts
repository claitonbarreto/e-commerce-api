import { CustomerRepository } from "../../customer/interfaces/repository/customer-repository.interface";
import { ShoppingCart } from "../domain/ShoppingCart.entity";
import { GetShoppingCartApplication } from "../interfaces/applications/get-shopping-cart.application.interface";
import { ShoppingCartRepository } from "../interfaces/repository/shopping-cart-repository.interface";

export class GetShoppingCartApplicationImpl implements GetShoppingCartApplication {

    constructor(
        private readonly shoppingCartRepository: ShoppingCartRepository,
        private readonly customerRepository: CustomerRepository
    ) {}

    async getShoppingCart(customerId: string): Promise<ShoppingCart> {

        const customer = this.customerRepository.findById(customerId);

        if (!customer) {
            throw new Error("Customer not found");
        }

        return this.shoppingCartRepository.findByCustomer(customerId);
    }
}