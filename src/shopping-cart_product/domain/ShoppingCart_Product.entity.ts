import crypto from 'crypto';
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "../../product/domain/Product.entity";
import { ShoppingCart } from "../../shopping-cart/domain/ShoppingCart.entity";

type ShoppingCart_ProductProps = {
    id?: string;
    quantity: number;
    product: Product;
    shoppingCart: ShoppingCart;
}

@Entity("shopping_cart_products")
export class ShoppingCart_Product {

    @PrimaryColumn()
    id: string;

    @Column()
    quantity: number;
    
    @ManyToOne(() => Product, product => product.shoppingCartProducts)
    product: Product;

    @ManyToOne(() => ShoppingCart, shoppingCart => shoppingCart.shoppingCartProducts)
    shoppingCart: ShoppingCart;

    constructor(
        props: ShoppingCart_ProductProps,
    ) {
        if(props && !props.id)
            props.id = crypto.randomUUID();
        Object.assign(this, props);
    } 
}