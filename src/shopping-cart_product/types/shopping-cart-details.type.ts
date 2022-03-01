import { Product } from "../../product/domain/Product.entity";

export type ShoppingCartDetails = {
    products: Product[];
    total: number;
}