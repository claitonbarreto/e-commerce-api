import crypto from 'crypto';
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { ShoppingCartStatus } from "../enums/shopping-cart-status.enum";
import { ShoppingCartProps } from "../types/shopping-cart.props";
import { Customer } from "./Customer.entity";
import { Product } from "./Product.entity";

@Entity()
export class ShoppingCart {
    
    @PrimaryColumn()
    id: string;

    @Column()
    total: number;

    @Column()
    shelfLife: number;

    @Column({
        type: 'enum',
        enum: ShoppingCartStatus,
    })
    status: ShoppingCartStatus

    @OneToMany(() => Product, product => product.shoppingCart)
    products: Product[];

    @OneToOne(() => Customer, customer => customer.shoppingCart)
    customer: Customer;

    constructor(
        props: ShoppingCartProps,
    ) {
        if(!props.id)
            props.id = crypto.randomUUID();
        Object.assign(this, props);
    }
    
}