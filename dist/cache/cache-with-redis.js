"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheWithRedis = void 0;
const cache_1 = require("./cache");
class CacheWithRedis extends cache_1.Cache {
    cache;
    constructor(cache, ttl, prefix) {
        super(ttl, prefix);
        this.cache = cache;
    }
    async get(key) {
        if (Array.isArray(key)) {
            let res = await this.cache.mget(this.key(key));
            res = res.filter(row => row !== null);
            return res.map(row => JSON.parse(row));
        }
        else {
            const res = await this.cache.get(this.key(key));
            if (res === null)
                return undefined;
            return JSON.parse(res);
        }
    }
    async set(items, ttl) {
        if (ttl === undefined)
            ttl = this.ttl;
        if (Array.isArray(items)) {
            const multi = this.cache.multi();
            for (const item of items)
                multi.setex(this.key(item.key), ttl, JSON.stringify(item.value));
            return await multi.exec().then();
        }
        else {
            const item = items;
            return await this.cache.setex(this.key(item.key), ttl, JSON.stringify(item.value)).then();
        }
    }
    async del(key) {
        return await this.cache.del(...this.key(key)).then();
    }
    async clear() {
        return this.cache.flushall().then();
    }
}
exports.CacheWithRedis = CacheWithRedis;
//# sourceMappingURL=cache-with-redis.js.map