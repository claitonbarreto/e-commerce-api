import { createQueryBuilder, getConnection } from "typeorm";
import { BaseRespoitory } from "../../core/repositories/BaseRepository";
import { Customer } from "../domain/Customer.entity";
import { CustomerRepository } from "../interfaces/repository/customer-repository.interface";

export class CustomerRepositoryImpl 
extends BaseRespoitory<Customer> 
implements CustomerRepository {

    async findByEmail(email: string): Promise<Customer> {
        return await getConnection()
            .getRepository(Customer)
            .findOne({
                where: {
                    email
                }
            });
    }

    async findByIdWithShoppingCart(id: string): Promise<Customer> {
        const query =  createQueryBuilder(Customer, "customer")
            .innerJoinAndSelect("customer.shoppingCart", "shoppingCart")
            .where("customer.id = :id", { id })
            
        const customer = await query.getOne();

        return customer;
    }
    
}