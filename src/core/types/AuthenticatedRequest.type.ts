import { Request } from "express";
import { AdminUser } from "../../admin-user/domain/AdminUser.entity";
import { Customer } from "../../customer/domain/Customer.entity";
import { User } from "../../user/domain/User";

export type AuthenticatedRequest = Request & {user?: User, admin?: AdminUser, customer?: Customer};

