"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionHandler = void 0;
const extended_error_1 = require("./extended-error");
const events_1 = require("./events");
function exceptionHandler(eventEmitter) {
    return async (error, req, res, next) => {
        eventEmitter?.emit(events_1.XERROR.ERROR, error, req);
        if (error instanceof extended_error_1.ExtendedError) {
            res.status(error.httpResponseCode);
            res.json(error.silent
                ? { message: error.message, code: error.code }
                : { message: error.message, code: error.code, details: error.details });
        }
        else {
            res.status(500);
            res.json({ error: error.message });
        }
        next();
    };
}
exports.exceptionHandler = exceptionHandler;
//# sourceMappingURL=express-exception-handler.js.map