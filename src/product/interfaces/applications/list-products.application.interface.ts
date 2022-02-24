import { Product } from "../../domain/Product.entity";

export interface ListProductsApplication {
    listProducts(): Promise<Product[]>;
}