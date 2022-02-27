import crypto from 'crypto';
import { Column, Entity, PrimaryColumn } from "typeorm";
import { UserRole } from '../../user/enums/user-role.enum';
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

    @Column({
        type: "enum",
        enum: UserRole,
    })
    role: UserRole;

    constructor(
        props: AdminUserProps,
    ) {
        if(props && !props.id)
            props.id = crypto.randomUUID();
        Object.assign(this, props);
    }
}