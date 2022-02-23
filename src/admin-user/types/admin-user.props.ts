import { UserProps } from "../../user/types/user.props";

export type AdminUserProps = UserProps & {  
    register: string;
    sector: string;
}