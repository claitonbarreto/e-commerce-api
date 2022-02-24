import { Request, Response } from "express";
import { GetShoppingCartApplication } from "./interfaces/applications/get-shopping-cart.application.interface";

export class ShoppingCartController {

    constructor(
        private readonly getShoppingCartApplication: GetShoppingCartApplication
    ) {}

    async getShoppingCart(req: Request, res: Response): Promise<Response> {
            
            const { customerId } = req.params;
            const shoppingCart = await this.getShoppingCartApplication.getShoppingCart(customerId);
    
            return res.status(200).json({shoppingCart});
    }
}