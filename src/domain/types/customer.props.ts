import { UserProps } from "./user.props"

export type Address = {
    street: string;
    number: number;
    city: string;
    state: string;
    zipCode: string;
}

export type CustomerProps = UserProps & {
    cpf: string;
    address: Address;
    phone: string;
}