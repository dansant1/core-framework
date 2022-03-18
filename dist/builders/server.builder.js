"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerBuilder = void 0;
class ServerBuilder {
    setPort(port) {
        this.port = port;
        return this;
    }
    setPrefix(prefix) {
        this.prefix = prefix;
        return this;
    }
    setEntryType(type) {
        this.entryType = type;
        return this;
    }
    setServerType(type) {
        this.serverType = type;
        return this;
    }
    setProtolType(type) {
        this.protocolType = type;
        return this;
    }
    setGatewayType(type) {
        this.gatewayType = type;
        return this;
    }
    setConfig(config) {
        this.config = config;
        return this;
    }
}
exports.ServerBuilder = ServerBuilder;
//# sourceMappingURL=server.builder.js.map