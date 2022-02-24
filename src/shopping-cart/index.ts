import { CustomerRepositoryImpl } from "../customer/repository/customer.repository";
import { GetShoppingCartApplicationImpl } from "./applications/get-shopping-cart.application";
import { ShoppingCartRepositoryImpl } from "./repository/shopping-cart.repository";
import { ShoppingCartController } from "./shopping-cart.controller";

const shoppingCartRepository = new ShoppingCartRepositoryImpl("shopping_cart");
const customerRepository = new CustomerRepositoryImpl("customer");

const getShoppingCartApplication = new GetShoppingCartApplicationImpl(shoppingCartRepository, customerRepository);

const shoppingCartController = new ShoppingCartController(getShoppingCartApplication);

export {
    shoppingCartController,
}