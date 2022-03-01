export interface IDeleteShoppingCartApplication {
    delete(id: string): Promise<void>;
}