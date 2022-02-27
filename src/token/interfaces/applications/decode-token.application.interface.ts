export interface IDecodeTokenApplication {
    decodeToken<T>(token: string): Promise<T>;
}