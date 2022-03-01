import { CustomerRepositoryImpl } from "../customer/repository/customer.repository";
import { DeleteShoppingCartApplication } from "./applications/delete-shopping-cart.application";
import { GetShoppingCartApplicationImpl } from "./applications/get-shopping-cart.application";
import { ShoppingCartRepositoryImpl } from "./repository/shopping-cart.repository";
import { ShoppingCartController } from "./shopping-cart.controller";

const shoppingCartRepository = new ShoppingCartRepositoryImpl("shopping_cart");
const customerRepository = new CustomerRepositoryImpl("customer");

const getShoppingCartApplication = new GetShoppingCartApplicationImpl(shoppingCartRepository, customerRepository);
const deleteShoppingCartApplication = new DeleteShoppingCartApplication(shoppingCartRepository);

const shoppingCartController = new ShoppingCartController(
    getShoppingCartApplication,
    deleteShoppingCartApplication,
);

export {
    shoppingCartController,
}