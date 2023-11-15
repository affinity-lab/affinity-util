export declare class Logger {
    private write;
    private minLogLevel;
    constructor(write: (message: string) => void, minLogLevel?: number);
    request(message: string): void;
    /**
     * @param message: log message.
     * @param level: debug, info, warning, extended-error, fatal
     */
    log(message: string, level: 0 | 1 | 2 | 3 | 4): void;
    debug(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
    fatal(message: string): void;
}
