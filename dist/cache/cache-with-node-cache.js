"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheWithNodeCache = void 0;
const cache_1 = require("./cache");
class CacheWithNodeCache extends cache_1.Cache {
    cache;
    constructor(cache, ttl, prefix) {
        super(ttl, prefix);
        this.cache = cache;
    }
    get(key) {
        return Promise.resolve(Array.isArray(key)
            ? Object.values(this.cache.mget(this.key(key)))
            : this.cache.get(this.key(key)));
    }
    set(items, ttl) {
        if (ttl === undefined)
            ttl = this.ttl;
        if (Array.isArray(items)) {
            const setWithTTL = items.map(item => { return { key: this.key(item.key), val: item.value, ttl }; });
            this.cache.mset(setWithTTL);
        }
        else {
            const item = items;
            this.cache.set(this.key(item.key), item.value, ttl);
        }
        return Promise.resolve();
    }
    del(key) {
        this.cache.del(this.key(key));
        return Promise.resolve();
    }
    clear() {
        this.cache.flushAll();
        return Promise.resolve();
    }
}
exports.CacheWithNodeCache = CacheWithNodeCache;
//# sourceMappingURL=cache-with-node-cache.js.map