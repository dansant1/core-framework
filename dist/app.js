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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _AppFactory_app, _AppFactory_serverType, _AppFactory_PORT, _AppFactory_gatewayType, _AppFactory_protocolType, _AppFactory_entryType;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppFactory = void 0;
const _shared_1 = require("./@shared");
const platforms_1 = require("./platforms");
const fastify_1 = __importDefault(require("fastify"));
const mercurius_1 = __importDefault(require("mercurius"));
class AppFactory {
    constructor(appInit) {
        _AppFactory_app.set(this, void 0);
        _AppFactory_serverType.set(this, void 0);
        _AppFactory_PORT.set(this, void 0);
        _AppFactory_gatewayType.set(this, void 0);
        _AppFactory_protocolType.set(this, void 0);
        _AppFactory_entryType.set(this, void 0);
        __classPrivateFieldSet(this, _AppFactory_serverType, appInit.serverType, "f");
        __classPrivateFieldSet(this, _AppFactory_gatewayType, appInit.gatewayType, "f");
        __classPrivateFieldSet(this, _AppFactory_protocolType, appInit.protocolType, "f");
        __classPrivateFieldSet(this, _AppFactory_entryType, appInit.entryType, "f");
        if (appInit.serverType === platforms_1.Platforms.FASTIFY) {
            __classPrivateFieldSet(this, _AppFactory_app, (0, fastify_1.default)(appInit.config), "f");
        }
        __classPrivateFieldSet(this, _AppFactory_PORT, appInit.port, "f");
    }
    static create(appInit) {
        return new AppFactory(appInit);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _AppFactory_serverType, "f") === platforms_1.Platforms.FASTIFY) {
                if (__classPrivateFieldGet(this, _AppFactory_protocolType, "f") === _shared_1.Protocols.HTTP &&
                    __classPrivateFieldGet(this, _AppFactory_gatewayType, "f") === _shared_1.GatewayTypes.GraphQL) {
                    //@ts-ignore
                    __classPrivateFieldGet(this, _AppFactory_app, "f").register(mercurius_1.default, {
                        path: '/graphql',
                        schema: __classPrivateFieldGet(this, _AppFactory_entryType, "f").schema,
                        resolvers: __classPrivateFieldGet(this, _AppFactory_entryType, "f").resolvers,
                        graphiql: 'playground',
                    });
                }
                try {
                    yield __classPrivateFieldGet(this, _AppFactory_app, "f").listen(__classPrivateFieldGet(this, _AppFactory_PORT, "f"));
                    _shared_1.Logger.warn(`Server running at port=${__classPrivateFieldGet(this, _AppFactory_PORT, "f")}`);
                }
                catch (error) {
                    __classPrivateFieldGet(this, _AppFactory_app, "f").log.error(error);
                    process.exit(1);
                }
            }
        });
    }
}
exports.AppFactory = AppFactory;
_AppFactory_app = new WeakMap(), _AppFactory_serverType = new WeakMap(), _AppFactory_PORT = new WeakMap(), _AppFactory_gatewayType = new WeakMap(), _AppFactory_protocolType = new WeakMap(), _AppFactory_entryType = new WeakMap();
//# sourceMappingURL=app.js.map