import { AuthProps } from "../types/Auth.props";

export class Auth {
    
    public email?: string;
    public register?:string
    public password: string;

    constructor(
        props: AuthProps,
    ) {
        Object.assign(this, props);
    }
}