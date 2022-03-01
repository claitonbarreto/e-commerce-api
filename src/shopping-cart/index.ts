import { CustomerRepositoryImpl } from "../customer/repository/customer.repository";
import { ProductRepositoryImpl } from "../product/repository/product-repository";
import { DeleteProductFromShoppingCartApplication } from "./applications/delete-product-from-shopping-cart.application";
import { DeleteShoppingCartApplication } from "./applications/delete-shopping-cart.application";
import { GetShoppingCartApplicationImpl } from "./applications/get-shopping-cart.application";
import { ShoppingCartRepositoryImpl } from "./repository/shopping-cart.repository";
import { ShoppingCartController } from "./shopping-cart.controller";

const shoppingCartRepository = new ShoppingCartRepositoryImpl("shopping_cart");
const customerRepository = new CustomerRepositoryImpl("customer");
const productRepository = new ProductRepositoryImpl("product");

const getShoppingCartApplication = new GetShoppingCartApplicationImpl(shoppingCartRepository, customerRepository);
const deleteShoppingCartApplication = new DeleteShoppingCartApplication(shoppingCartRepository);
const deleteProductFromShoppingCart = new DeleteProductFromShoppingCartApplication(shoppingCartRepository, productRepository);

const shoppingCartController = new ShoppingCartController(
    getShoppingCartApplication,
    deleteShoppingCartApplication,
    deleteProductFromShoppingCart
);

export {
    shoppingCartController,
}