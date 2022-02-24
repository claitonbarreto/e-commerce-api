import { Product } from "../domain/Product.entity";
import { ListProductsApplication } from "../interfaces/applications/list-products.application.interface";
import { ProductRepository } from "../interfaces/repository/product-repository.interface";

export class ListProductsApplicationImpl implements ListProductsApplication {

    constructor(
        private readonly productRepository: ProductRepository
    ) {}

    async listProducts(): Promise<Product[]> {
        return this.productRepository.findAll();
    }
}