import { Response } from "express";
import { AuthenticatedRequest } from "../core/types/AuthenticatedRequest.type";
import { DeleteShoppingCartApplication } from "./applications/delete-shopping-cart.application";
import { GetShoppingCartApplication } from "./interfaces/applications/get-shopping-cart.application.interface";

export class ShoppingCartController {

    constructor(
        private readonly getShoppingCartApplication: GetShoppingCartApplication,
        private readonly deleteShoppingCartApplication: DeleteShoppingCartApplication,
    ) {}

    async getShoppingCart(req: AuthenticatedRequest, res: Response): Promise<Response> {
            
            const { id } = req.user
            const shoppingCart = await this.getShoppingCartApplication.getShoppingCart(id);
    
            return res.status(200).json({shoppingCart});
    }

    async deleteShoppingCart(req: AuthenticatedRequest, res: Response): Promise<Response> {

        try {

            const { id } = req.user;
            await this.deleteShoppingCartApplication.delete(id);
            return res.status(200).json({message: "Shopping cart deleted"});

        } catch (error) {

            return res.status(400).json({message: error.message});
            
        }
    }
}