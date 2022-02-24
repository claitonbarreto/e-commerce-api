import { Product } from "../domain/Product.entity";
import { CreateProductApplication } from "../interfaces/applications/create-product.application.interface";
import { ProductRepository } from "../interfaces/repository/product-repository.interface";

export class CreateProductApplicationImpl implements CreateProductApplication {

    constructor(
        private readonly productRepository: ProductRepository
    ) {}

    createProduct(product: Product): Promise<Product> {
        return this.productRepository.create(product);
    }
}