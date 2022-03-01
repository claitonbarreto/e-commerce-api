import { ShoppingCart } from "../../../shopping-cart/domain/ShoppingCart.entity";

export interface IGetCustomerShoppingCartApplication {
    getShoppingCart(customerId: string): Promise<ShoppingCart | undefined>;
}