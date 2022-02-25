import { Auth } from "../../domain/Auth";

export interface AuthCustomerApplication {
    authCustomer(auth: Auth): Promise<string>;
}