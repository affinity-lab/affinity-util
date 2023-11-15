"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TmpFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
class TmpFile {
    tmp;
    filename;
    uniqueDir;
    file;
    constructor(tmp, filename, buffer) {
        this.tmp = tmp;
        this.filename = filename;
        this.uniqueDir = crypto_1.default.randomUUID();
        this.file = path_1.default.resolve(tmp, this.uniqueDir, filename);
        fs_1.default.mkdirSync(path_1.default.resolve(this.tmp, this.uniqueDir));
        fs_1.default.writeFileSync(this.file, buffer);
    }
    release() {
        fs_1.default.unlinkSync(this.file);
        fs_1.default.rmdirSync(path_1.default.resolve(this.tmp, this.uniqueDir));
    }
}
exports.TmpFile = TmpFile;
//# sourceMappingURL=tmp-file.js.map