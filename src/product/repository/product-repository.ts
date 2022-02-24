import { BaseRespoitory } from "../../core/repositories/BaseRepository";
import { Product } from "../domain/Product.entity";
import { ProductRepository } from "../interfaces/repository/product-repository.interface";

export class ProductRepositoryImpl 
extends BaseRespoitory<Product>
implements ProductRepository {}