"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatalError = void 0;
const extended_error_1 = require("./extended-error");
function fatalError(message = "fatal extended-error occurred", info = {}) {
    return new extended_error_1.ExtendedError(message, "FATAL_ERROR", undefined, 500, true);
}
exports.fatalError = fatalError;
//# sourceMappingURL=fatal-error.js.map