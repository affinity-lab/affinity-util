import { Cache, type KeyValue } from "./cache";
import { Redis } from "ioredis";
export declare class CacheWithRedis<T = any> extends Cache<T> {
    private cache;
    constructor(cache: Redis, ttl: number, prefix?: string);
    get(key: string | number): Promise<T | undefined>;
    get(keys: Array<string | number>): Promise<Array<T>>;
    set(item: KeyValue<T>, ttl?: number): Promise<void>;
    set(items: Array<KeyValue<T>>, ttl?: number): Promise<void>;
    del(keys: Array<string | number>): Promise<void>;
    del(key: string | number): Promise<void>;
    clear(): Promise<void>;
}
