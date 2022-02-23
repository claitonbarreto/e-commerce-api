import { Column, Entity, OneToOne } from "typeorm";
import { Address, CustomerProps } from "../types/customer.props";
import { ShoppingCart } from "./ShoppingCart.entity";
import { User } from "./User.entity";


@Entity()
export class Customer extends User {

    @Column()
    cpf: string;

    @Column({
        type: "json",
    })
    address: Address;

    @Column()
    phone: string;

    @OneToOne(() => ShoppingCart, shoppingCart => shoppingCart.customer)
    shoppingCart: ShoppingCart;

    constructor(
        props: CustomerProps,
    ) {
        super(props);
        Object.assign(this, props);
    }
}