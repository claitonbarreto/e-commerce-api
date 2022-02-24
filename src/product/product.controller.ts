import { Request, Response } from "express";
import { ListCustomersApplicationImpl } from "../customer/applications/list-customers.application";
import { Product } from "./domain/Product.entity";
import { CreateProductApplication } from "./interfaces/applications/create-product.application.interface";
import { ListProductsApplication } from "./interfaces/applications/list-products.application.interface";

export class ProductController {

    constructor(
        private readonly createProductApplication: CreateProductApplication,
        private readonly listProductsApplication: ListProductsApplication
    ) {}

    async createProduct(request: Request, response: Response): Promise<Response> {

        const {name, price, quantity} = request.body;

        const product = new Product({
            name,
            price,
            quantity
        })

        const createdProduct = await this.createProductApplication.createProduct(product);

        return response.status(201).json(createdProduct);
    }

    async listProducts(request: Request, response: Response): Promise<Response> {
            
            const products = await this.listProductsApplication.listProducts();
    
            return response.status(200).json(products);
    }
}