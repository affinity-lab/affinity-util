"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strToDate = exports.traverse = void 0;
function traverse(obj, convert) {
    if (Array.isArray(obj))
        return obj.map((item) => traverse(item, convert));
    if (obj !== null && typeof obj === "object") {
        for (const key in obj) {
            if (obj.hasOwnProperty(key))
                obj[key] = traverse(obj[key], convert);
        }
        return obj;
    }
    obj = convert(obj);
    return obj;
}
exports.traverse = traverse;
function strToDate(value) {
    return typeof value === "string" && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(value) ? new Date(value) : value;
}
exports.strToDate = strToDate;
//# sourceMappingURL=convert.js.map