import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "../../../core/types/AuthenticatedRequest.type";

export interface ValidateAdminUserApplicationInterface {
    validate(request: AuthenticatedRequest, response: Response, next: NextFunction): Promise<Response>;
}