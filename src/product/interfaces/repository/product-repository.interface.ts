import { IRepository } from "../../../core/interfaces/IRepository";
import { Product } from "../../domain/Product.entity";

export interface ProductRepository extends IRepository<Product> {}