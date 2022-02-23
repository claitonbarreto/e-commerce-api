import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ProductProps } from "../types/product.props";
import { ShoppingCart } from "./ShoppingCart.entity";


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

    @ManyToOne(() => ShoppingCart, ShoppingCart => ShoppingCart.products)
    shoppingCart: ShoppingCart;
    
    constructor(
        props: ProductProps,
    ) { 
        Object.assign(this, props);
    }
}