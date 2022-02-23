import { UserProps } from "./user.props";

export type AdminUserProps = UserProps & {  
    register: string;
    sector: string;
}