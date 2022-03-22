"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfigFactory = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: `${process.cwd()}/src/.env` });
const platforms_1 = require("../platforms");
class EnvConfigFactory {
    constructor(data) {
        this.configType = data.configType;
        this.metadata = data.metatada;
    }
    static create(data) {
        return new EnvConfigFactory(data);
    }
    get(key) {
        var _a;
        if (this.configType === platforms_1.ConfigType.ENV) {
            return (_a = process.env) === null || _a === void 0 ? void 0 : _a[key];
        }
        if (this.configType === platforms_1.ConfigType.SECRET_MANAGER) {
            // TO DO add logic here
            return key;
        }
    }
}
exports.EnvConfigFactory = EnvConfigFactory;
//# sourceMappingURL=envConfig.factory.js.map