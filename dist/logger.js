"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    write;
    minLogLevel;
    constructor(write, minLogLevel = 0) {
        this.write = write;
        this.minLogLevel = minLogLevel;
    }
    request(message) {
        this.write(new Date().toISOString() + " [REQ] " + message);
    }
    /**
     * @param message: log message.
     * @param level: debug, info, warning, extended-error, fatal
     */
    log(message, level) {
        [this.debug, this.info, this.warning, this.error, this.fatal][level](message);
    }
    debug(message) {
        if (this.minLogLevel <= 0)
            this.write(new Date().toISOString() + " [DBG] " + message);
    }
    info(message) {
        if (this.minLogLevel <= 1)
            this.write(new Date().toISOString() + " [INF] " + message);
    }
    warning(message) {
        if (this.minLogLevel <= 2)
            this.write(new Date().toISOString() + " [WRN] " + message);
    }
    error(message) {
        if (this.minLogLevel <= 3)
            this.write(new Date().toISOString() + " [ERR] " + message);
    }
    fatal(message) {
        if (this.minLogLevel <= 4)
            this.write(new Date().toISOString() + " [FTL] " + message);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map