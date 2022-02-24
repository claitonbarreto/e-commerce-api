import { CreateProductApplicationImpl } from "./applications/create-product.application";
import { ListProductsApplicationImpl } from "./applications/list-products.application";
import { ProductController } from "./product.controller";
import { ProductRepositoryImpl } from "./repository/product-repository";

const productRepository = new ProductRepositoryImpl("product");

const createProductApplication = new CreateProductApplicationImpl(productRepository);
const listProductsApplication = new ListProductsApplicationImpl(productRepository);

const productsController = new ProductController(createProductApplication, listProductsApplication);

export {
    productsController,
    createProductApplication
}