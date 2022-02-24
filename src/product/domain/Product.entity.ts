import crypto from 'crypto';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { ProductProps } from "../types/product.props";
import { ShoppingCart } from "../../shopping-cart/domain/ShoppingCart.entity";


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

    @ManyToMany(() => ShoppingCart, ShoppingCart => ShoppingCart.products)
    shoppingCarts: ShoppingCart[];
    
    constructor(
        props: ProductProps,
    ) { 
        if(props && !props.id)
            props.id = crypto.randomUUID()
        Object.assign(this, props);
    }
}