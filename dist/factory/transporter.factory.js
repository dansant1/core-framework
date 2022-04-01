"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransporterFactory = void 0;
const axios_1 = __importDefault(require("axios"));
const _shared_1 = require("../@shared");
class TransporterFactory {
    constructor(gatewayType, dependency) {
        this.gatewayType = gatewayType;
        this.dependency = dependency;
    }
    static create(data) {
        return new TransporterFactory(data.gatewayType, data.dependency);
    }
    emit(event, method, metadata) {
        if (this.dependency === _shared_1.Dependency.AXIOS &&
            this.gatewayType === _shared_1.GatewayTypes.REST) {
            return axios_1.default[method](event, metadata);
        }
        else {
            return {};
        }
    }
}
exports.TransporterFactory = TransporterFactory;
//# sourceMappingURL=transporter.factory.js.map