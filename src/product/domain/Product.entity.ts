import crypto from 'crypto';
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ProductProps } from "../types/product.props";
import { ShoppingCart_Product } from '../../shopping-cart_product/domain/ShoppingCart_Product.entity';


@Entity()
export class Product {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
    })
    price: number;

    @Column()
    quantity: number;

    @OneToMany(() => ShoppingCart_Product, shoppingCartProducts => shoppingCartProducts.product)
    shoppingCartProducts: ShoppingCart_Product[];
    
    constructor(
        props: ProductProps,
    ) { 
        if(props && !props.id)
            props.id = crypto.randomUUID()
        Object.assign(this, props);
    }
}