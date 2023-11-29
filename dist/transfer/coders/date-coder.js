"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateCoder = void 0;
const transfer_1 = require("../transfer");
class DateCoder extends transfer_1.Coder {
    type = "date";
    decode(value) { return new Date(value); }
    encode(value) { return value instanceof Date ? value.toString() : value; }
}
exports.DateCoder = DateCoder;
//# sourceMappingURL=date-coder.js.map