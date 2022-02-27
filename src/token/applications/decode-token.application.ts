import jwt from 'jsonwebtoken';
import { IDecodeTokenApplication } from "../interfaces/applications/decode-token.application.interface";

export class DecodeTokenApplication implements IDecodeTokenApplication {
    async decodeToken<T>(token: string): Promise<T> {
        const { JWT_SECRET } = process.env

        const decoded = jwt.verify(token, JWT_SECRET)

        return decoded as T;
    }
}