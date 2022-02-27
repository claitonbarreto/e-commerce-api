export interface ICheckTokenApplication {
    checkToken(token: string): Promise<boolean>;
}