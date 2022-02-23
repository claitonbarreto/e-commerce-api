import { Entity, getConnection } from "typeorm";
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
        throw new Error("Method not implemented.");
    }
    async update(entity: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
}