"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfigFactory = exports.ConfigType = void 0;
var ConfigType;
(function (ConfigType) {
    ConfigType["ENV"] = "env";
    ConfigType["SECRET_MANAGER"] = "secret_manager";
})(ConfigType = exports.ConfigType || (exports.ConfigType = {}));
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
        if (this.configType === ConfigType.ENV) {
            return (_a = process.env) === null || _a === void 0 ? void 0 : _a[key];
        }
        if (this.configType === ConfigType.SECRET_MANAGER) {
            // TO DO add logic here
            return key;
        }
    }
}
exports.EnvConfigFactory = EnvConfigFactory;
//# sourceMappingURL=envConfig.js.map