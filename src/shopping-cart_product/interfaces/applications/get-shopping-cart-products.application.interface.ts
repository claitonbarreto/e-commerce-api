import { Product } from "../../../product/domain/Product.entity";

export interface IGetShoppingCartProducts {
    getShoppingCartProducts(shoppingCartId: string): Promise<Product[]>;
}