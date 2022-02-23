import { getConnection } from "typeorm";
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
    
}