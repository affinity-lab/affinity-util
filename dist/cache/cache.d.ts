export type KeyValue<T> = {
    key: string | number;
    value: T;
};
export declare abstract class Cache<T = any> {
    protected ttl: number;
    protected prefix?: string | undefined;
    protected constructor(ttl: number, prefix?: string | undefined);
    getReader(ttl?: number): (handler: () => any, key: string | number, ttl?: number) => Promise<any>;
    getInvalidator(): (key: string | number) => Promise<void>;
    read(handler: () => any, key: string | number, ttl?: number): Promise<any>;
    key(keys: Array<string | number>): Array<string>;
    key(key: string | number): string;
    key(key: string | number | Array<string | number>): string | Array<string>;
    abstract set(item: KeyValue<T>, ttl?: number): Promise<void>;
    abstract set(items: Array<KeyValue<T>>, ttl?: number): Promise<void>;
    abstract get(key: string | number): Promise<T | undefined>;
    abstract get(keys: Array<string | number>): Promise<Array<T>>;
    abstract del(key: string | number): Promise<void>;
    abstract del(keys: Array<string | number>): Promise<void>;
    abstract clear(): Promise<void>;
}
