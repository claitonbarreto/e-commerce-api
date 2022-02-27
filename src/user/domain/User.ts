import crypto from 'crypto';
import { Column, PrimaryColumn } from "typeorm";
import { UserRole } from "../enums/user-role.enum";
import { UserProps } from "../types/user.props";

export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
    })
    role: UserRole;

    constructor(props: UserProps) { 
        if(props && !props.id)
            this.id = crypto.randomUUID()
        Object.assign(this, props);
    }
}