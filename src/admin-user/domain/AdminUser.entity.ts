import crypto from 'crypto';
import { Column, Entity, PrimaryColumn } from "typeorm";
import { AdminUserProps } from "../types/admin-user.props";

@Entity()
export class AdminUser {

    @PrimaryColumn()
    id: string;
    
    @Column()
    register: string;

    @Column()
    sector: string;

    @Column()
    password: string;

    constructor(
        props: AdminUserProps,
    ) {
        if(props && !props.id)
            props.id = crypto.randomUUID();
        Object.assign(this, props);
    }
}