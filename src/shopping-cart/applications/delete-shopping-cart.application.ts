import { ShoppingCartRepository } from "../interfaces/repository/shopping-cart-repository.interface";

export class DeleteShoppingCartApplication {
    constructor(
        private readonly shoppingCartRepository: ShoppingCartRepository,
    ) {}
    
    async delete(id: string): Promise<void> {

        const shoppingCart = await this.shoppingCartRepository.findByCustomer(id);

        if (!shoppingCart) {
            throw new Error("Shopping cart not found");
        }

        await this.shoppingCartRepository.delete(shoppingCart.id);
    }
}