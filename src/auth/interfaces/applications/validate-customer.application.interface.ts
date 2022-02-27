import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "../../../core/types/AuthenticatedRequest.type";

export interface ValidadeCustomerApplicationInterface {
    validate(request: AuthenticatedRequest, response: Response, next: NextFunction): Promise<Response>;
}