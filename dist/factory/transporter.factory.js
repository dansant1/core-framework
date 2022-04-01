"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dependency === _shared_1.Dependency.AXIOS &&
                this.gatewayType === _shared_1.GatewayTypes.REST) {
                return axios_1.default[method](event, metadata || {});
            }
            else {
                return {};
            }
        });
    }
}
exports.TransporterFactory = TransporterFactory;
//# sourceMappingURL=transporter.factory.js.map