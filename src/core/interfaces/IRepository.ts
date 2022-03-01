export interface IRepository<T> {
    create(entity: T): Promise<T>;
    findById(id: string): Promise<T | undefined>;
    findAll(): Promise<T[]>;
    update(entity: T): Promise<T>;
    delete(id: string): Promise<void>;
}   