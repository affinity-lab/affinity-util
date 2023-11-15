"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scopeEnum = void 0;
const scopeEnum = (enm, prepend) => { for (const enmKey in enm)
    enm[enmKey] = prepend + ":" + enm[enmKey]; };
exports.scopeEnum = scopeEnum;
//# sourceMappingURL=scope-enum.js.map