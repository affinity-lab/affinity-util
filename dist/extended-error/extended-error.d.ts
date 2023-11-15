/**
 * Custom error class that extends the built-in Error class and includes additional properties.
 */
export declare class ExtendedError extends Error {
    readonly message: string;
    readonly code: string;
    readonly details?: Record<string, any> | undefined;
    readonly httpResponseCode: number;
    readonly silent: boolean;
    /**
     * Constructs an instance of ExtendedError.
     * @param message - A human-readable description of the error.
     * @param code - A string code representing the error for programmatic handling.
     * @param details - Additional details or context about the error (optional).
     * @param httpResponseCode - The HTTP response code associated with the error (default: 500).
     * @param silent - Indicates whether the error should be logged or displayed (default: false).
     */
    constructor(message: string, code: string, details?: Record<string, any> | undefined, httpResponseCode?: number, silent?: boolean);
}
