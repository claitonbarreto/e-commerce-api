import { Product } from "../../domain/Product.entity";

export interface CreateProductApplication {
    createProduct(product: Product): Promise<Product>;
}