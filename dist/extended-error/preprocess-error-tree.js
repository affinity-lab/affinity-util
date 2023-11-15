"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorData = exports.preprocessErrorTree = void 0;
const extended_error_1 = require("./extended-error");
const change_case_all_1 = require("change-case-all");
function preprocessErrorTree(errors, prefix = "") {
    for (const prop of Object.getOwnPropertyNames(errors)) {
        if (typeof errors[prop] === "object") {
            preprocessErrorTree(errors[prop], prefix + "_" + prop);
        }
        else if (typeof errors[prop] === "function") {
            const originalMethod = errors[prop];
            const code = (0, change_case_all_1.snakeCase)(prefix + "_" + prop).toUpperCase();
            errors[prop] = (...args) => {
                const errorData = { code, ...originalMethod(...args) };
                if (errorData.message === undefined)
                    errorData.message = code;
                return new extended_error_1.ExtendedError(errorData.message, code, errorData.details, errorData.httpResponseCode, errorData.silent);
            };
        }
    }
}
exports.preprocessErrorTree = preprocessErrorTree;
function createErrorData(message, details, httpResponseCode = 500, silent = false) {
    const error = { httpResponseCode, silent, details: undefined, message: undefined };
    if (typeof details !== "undefined")
        error.details = details;
    if (typeof message !== "undefined")
        error.message = message;
    return error;
}
exports.createErrorData = createErrorData;
//# sourceMappingURL=preprocess-error-tree.js.map