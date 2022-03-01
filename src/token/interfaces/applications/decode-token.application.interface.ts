export interface IDecodeTokenApplication {
    decodeToken<T>(token: string): T;
}