import crypto from 'crypto';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { ShoppingCartStatus } from "../enums/shopping-cart-status.enum";
import { ShoppingCartProps } from "../types/shopping-cart.props";
import { Customer } from "../../customer/domain/Customer.entity";
import { Product } from "../../product/domain/Product.entity";

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

    @ManyToMany(() => Product, product => product.shoppingCarts)
    products: Product[];

    @OneToOne(() => Customer, customer => customer.shoppingCart)
    @JoinColumn()
    customer: Customer;

    constructor(
        props: ShoppingCartProps,
    ) {
        if(props && !props.id)
            props.id = crypto.randomUUID();
        Object.assign(this, props);
    }
    
}