import { Request } from "express";
import { User } from "../../user/domain/User";

export type AuthenticatedRequest = Request & {user?: User}

