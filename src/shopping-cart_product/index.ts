import { GetCustomerApplicationImpl } from "../customer/applications/get-customer.application";
import { CustomerRepositoryImpl } from "../customer/repository/customer.repository";
import { ProductRepositoryImpl } from "../product/repository/product-repository";
import { CreateShoppingCartApplicationImpl } from "../shopping-cart/applications/create-shopping-cart.application";
import { GetShoppingCartApplicationImpl } from "../shopping-cart/applications/get-shopping-cart.application";
import { ShoppingCartRepositoryImpl } from "../shopping-cart/repository/shopping-cart.repository";
import { AddProductToShoppingCartImpl } from "./applications/add-product-to-shopping-cart.application";
import { ShoppingCart_ProductRepositoryImpl } from "./repository/shopping-cart_product.repository";
import { ShoppingCart_ProductController } from "./shopping-cart_product.controller";

const shoppingCartRepository = new ShoppingCartRepositoryImpl("shopping_cart");
const productRepository = new ProductRepositoryImpl("product");
const shoppingCartProductRepository = new ShoppingCart_ProductRepositoryImpl("shopping_cart_products_product");
const customerRepository = new CustomerRepositoryImpl("customer");

const addProductToShoppingCartApplication = new AddProductToShoppingCartImpl(
    shoppingCartRepository,
    productRepository,
    shoppingCartProductRepository
)

const getCustomerApplication = new GetCustomerApplicationImpl(
    customerRepository
)

const getShoppingCartApplication = new GetShoppingCartApplicationImpl(
    shoppingCartRepository,
    customerRepository
)

const createShoppingCartApplication = new CreateShoppingCartApplicationImpl(
    shoppingCartRepository,
    customerRepository
)

const shoppingCartProductController = new ShoppingCart_ProductController(
    addProductToShoppingCartApplication,
    getCustomerApplication,
    getShoppingCartApplication,
    createShoppingCartApplication
);

export {
    shoppingCartProductController
}