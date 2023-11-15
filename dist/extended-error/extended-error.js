"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedError = void 0;
/**
 * Custom error class that extends the built-in Error class and includes additional properties.
 */
class ExtendedError extends Error {
    message;
    code;
    details;
    httpResponseCode;
    silent;
    /**
     * Constructs an instance of ExtendedError.
     * @param message - A human-readable description of the error.
     * @param code - A string code representing the error for programmatic handling.
     * @param details - Additional details or context about the error (optional).
     * @param httpResponseCode - The HTTP response code associated with the error (default: 500).
     * @param silent - Indicates whether the error should be logged or displayed (default: false).
     */
    constructor(message, code, details, httpResponseCode = 500, silent = false) {
        // Calls the constructor of the base Error class with the provided message.
        super(message);
        this.message = message;
        this.code = code;
        this.details = details;
        this.httpResponseCode = httpResponseCode;
        this.silent = silent;
        // Additional properties specific to ExtendedError.
        this.name = 'ExtendedError'; // Name of the error type.
        this.httpResponseCode = httpResponseCode;
        this.silent = silent;
        // An optional property providing additional information about the error cause.
        // This is added to the Error object as 'cause' for potential further analysis.
        this.cause = { code };
    }
}
exports.ExtendedError = ExtendedError;
//# sourceMappingURL=extended-error.js.map