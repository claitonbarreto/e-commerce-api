import crypto from 'crypto';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Address, CustomerProps } from "../types/customer.props";
import { ShoppingCart } from "../../shopping-cart/domain/ShoppingCart.entity";

@Entity()
export class Customer {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    cpf: string;

    @Column({
        type: "json",
    })
    address?: Address;

    @Column()
    phone: string;

    @OneToOne(() => ShoppingCart, shoppingCart => shoppingCart.customer, {
        onDelete: "SET NULL",
    })
    @JoinColumn()
    shoppingCart: ShoppingCart;

    constructor(
        props: CustomerProps,
    ) {
        if(props && !props.id)
            props.id = crypto.randomUUID();
        Object.assign(this, props);
    }
}