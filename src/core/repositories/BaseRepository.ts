import { getConnection } from "typeorm";
import { IRepository } from "../interfaces/IRepository";

export class BaseRespoitory<T> implements IRepository<T> {

    private tableName: string;

    constructor(
        tableName: string,
    ) {
        this.tableName = tableName;
    }

    async create(entity: T): Promise<T> {

        const query = getConnection()
            .createQueryBuilder()
            .insert()
            .into(this.tableName)
            .values(entity)

        const insertResult = await query.execute()


        return await this.findById(insertResult.identifiers[0].id)
    }
    async findById(id: string): Promise<T | undefined> {
        const query = getConnection()
            .createQueryBuilder()
            .select("entity")
            .from(this.tableName, "entity")
            .where("entity.id = :id", { id })

        return await query.getOne() as T
    }
    async findAll(): Promise<T[]> {
        const query = getConnection()
            .createQueryBuilder()
            .select("entity")
            .from(this.tableName, "entity")

        return await query.getMany() as T[]
    }
    async update(entity: T&{id:string}): Promise<T> {
        const query = getConnection()
            .createQueryBuilder()
            .update(this.tableName)
            .set(entity)
            .where("id = :id", { id: entity.id })

        await query.execute()

        return await this.findById(entity.id)
    }

    async delete(id: string): Promise<void> {
        const query = getConnection()
            .createQueryBuilder()
            .delete()
            .from(this.tableName)
            .where("id = :id", { id })

        await query.execute()
    }
}