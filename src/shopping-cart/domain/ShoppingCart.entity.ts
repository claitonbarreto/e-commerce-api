import crypto from 'crypto';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { ShoppingCartStatus } from "../enums/shopping-cart-status.enum";
import { ShoppingCartProps } from "../types/shopping-cart.props";
import { Customer } from "../../customer/domain/Customer.entity";
import { ShoppingCart_Product } from '../../shopping-cart_product/domain/ShoppingCart_Product.entity';

@Entity()
export class ShoppingCart {
    
    @PrimaryColumn()
    id: string;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
    })
    total: number;

    @Column()
    shelfLife: number;

    @Column({
        type: 'enum',
        enum: ShoppingCartStatus,
    })
    status: ShoppingCartStatus

    @OneToOne(() => Customer, customer => customer.shoppingCart)
    @JoinColumn()
    customer: Customer;

    @OneToMany(() => ShoppingCart_Product, shoppingCartProduct => shoppingCartProduct.shoppingCart)
    shoppingCartProducts: ShoppingCart_Product[];

    constructor(
        props: ShoppingCartProps,
    ) {
        if(props && !props.id)
            props.id = crypto.randomUUID();
        Object.assign(this, props);
    }
    
}