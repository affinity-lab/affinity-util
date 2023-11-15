"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
const crypto = __importStar(require("crypto"));
class Cache {
    ttl;
    prefix;
    constructor(ttl, prefix) {
        this.ttl = ttl;
        this.prefix = prefix;
        if (this.prefix === undefined)
            this.prefix = crypto.randomUUID();
    }
    getReader(ttl) {
        const _ttl = ttl === undefined ? this.ttl : ttl;
        return (handler, key, ttl = _ttl) => {
            return this.read(handler, key, ttl);
        };
    }
    getInvalidator() {
        return (key) => this.del(key);
    }
    async read(handler, key, ttl) {
        ttl = ttl === undefined ? this.ttl : ttl;
        const cached = await this.get(key);
        if (cached !== undefined)
            return cached;
        const value = await handler();
        await this.set({ key, value }, ttl);
        return value;
    }
    key(key) {
        return Array.isArray(key) ? key.map(k => this.prefix + "." + k.toString()) : this.prefix + "." + key.toString();
    }
}
exports.Cache = Cache;
//# sourceMappingURL=cache.js.map