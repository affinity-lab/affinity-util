"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadModuleDefaultExports = void 0;
const path_1 = __importDefault(require("path"));
const fast_glob_1 = __importDefault(require("fast-glob"));
function loadModuleDefaultExports(dir) {
    const modules = [];
    const records = fast_glob_1.default.globSync(path_1.default.join(dir + "/*.{ts,js}"));
    records.map(async (filename) => {
        let module = require(filename).default;
        modules.push(module);
    });
    return modules;
}
exports.loadModuleDefaultExports = loadModuleDefaultExports;
//# sourceMappingURL=load-module-default-exports.js.map