import { Column, Entity } from "typeorm";
import { AdminUserProps } from "../types/admin-user.props";
import { User } from "./User.entity";

@Entity()
export class AdminUser extends User {
    
    @Column()
    register: string;

    @Column()
    sector: string;

    constructor(
        props: AdminUserProps,
    ) {
        super(props);
        Object.assign(this, props);
    }
}