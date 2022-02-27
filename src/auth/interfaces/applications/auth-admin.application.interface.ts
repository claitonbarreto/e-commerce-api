import { Auth } from "../../domain/Auth";

export interface AuthAdmin {
    authAdmin(auth: Auth): Promise<string>;
}