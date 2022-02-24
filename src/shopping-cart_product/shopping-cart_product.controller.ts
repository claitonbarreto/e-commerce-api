import { Request, Response } from "express";
import { AuthenticatedRequest } from "../core/types/AuthenticatedRequest.type";
import { GetCustomerApplication } from "../customer/interfaces/applications/get-customer-application.interface";
import { ShoppingCart } from "../shopping-cart/domain/ShoppingCart.entity";
import { ShoppingCartStatus } from "../shopping-cart/enums/shopping-cart-status.enum";
import { CreateShoppingCartApplication } from "../shopping-cart/interfaces/applications/create-shopping-cart.application.interface";
import { GetShoppingCartApplication } from "../shopping-cart/interfaces/applications/get-shopping-cart.application.interface";
import { ShoppingCartRepository } from "../shopping-cart/interfaces/repository/shopping-cart-repository.interface";
import { AddProductToShoppingCart } from "./interfaces/applications/add-product-to-shopping-cart.application.interface";

export class ShoppingCart_ProductController {

    constructor(
        private readonly addProductToShoppingCartApplication: AddProductToShoppingCart,
        private readonly getCustomerApplication: GetCustomerApplication,
        private readonly getShoppingCartApplication: GetShoppingCartApplication,
        private readonly createShoppingCartApplication: CreateShoppingCartApplication,
    ) {}

    public async addProductToShoppingCart(request: AuthenticatedRequest, response: Response): Promise<Response> {
        try {
            const { productId } = request.params;
            const { quantity } = request.body;
            const { user } = request;
            const customer = await this.getCustomerApplication.getCustomer(user.id);
            const customerShoppingCart = await this.getShoppingCartApplication.getShoppingCart(customer.id);

            let shoppingCart: ShoppingCart;

            shoppingCart = customerShoppingCart

            if(!customerShoppingCart) {
                const toCreateShoppingCart = new ShoppingCart({
                    customer,
                    products: [],
                    total: 0,
                    shelfLife: 10,
                    status: ShoppingCartStatus.Open
                });

                shoppingCart = await this.createShoppingCartApplication.createShoppingCart(toCreateShoppingCart);
            }

            await this.addProductToShoppingCartApplication.addProductToShoppingCart(shoppingCart.id, productId, quantity);
            return response.status(201).json();
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }

}