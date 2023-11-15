export declare function preprocessErrorTree(errors: Record<string, any>, prefix?: string): void;
type ErrorData = {
    message?: string;
    details?: Record<string, any>;
    httpResponseCode: number;
    silent: boolean;
};
export declare function createErrorData(message?: string, details?: Record<string, any>, httpResponseCode?: number, silent?: boolean): ErrorData;
export {};
