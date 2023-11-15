"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/** Wrapper class for encoding and decoding JSON Web Tokens. */
class Jwt {
    secret;
    expires;
    algorithm;
    constructor(secret, expires, algorithm = "HS512") {
        this.secret = secret;
        this.expires = expires;
        this.algorithm = algorithm;
    }
    ;
    decode(token) {
        if (typeof token === "undefined") {
            return undefined;
        }
        let payload = jsonwebtoken_1.default.verify(token, this.secret, { algorithms: [this.algorithm] });
        if (typeof payload === "string")
            return undefined;
        return payload.content;
    }
    ;
    encode(payload, expires) {
        return jsonwebtoken_1.default.sign({ content: payload }, this.secret, { algorithm: this.algorithm, expiresIn: expires ?? this.expires });
    }
    ;
    static getStringContent(token) {
        if (!token)
            return undefined;
        try {
            return atob(token.split(".")[0]);
        }
        catch (e) {
            return undefined;
        }
    }
    static getContent(token) {
        if (!token)
            return undefined;
        try {
            JSON.parse(this.getStringContent(token));
        }
        catch (e) {
            return undefined;
        }
    }
}
exports.Jwt = Jwt;
//# sourceMappingURL=jwt.js.map