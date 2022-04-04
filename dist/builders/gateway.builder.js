"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayBuilder = void 0;
const _shared_1 = require("../@shared");
class GatewayBuilder {
    constructor(type, metadata) {
        this.Query = {};
        this.Mutation = {};
        this.services_query = [];
        this.services_mutation = [];
        this.controllers = [];
        this.schema = '';
        if (type === _shared_1.GatewayTypes.GraphQL) {
            this.services_query = metadata.services_query;
            this.services_mutation = metadata.services_mutation;
            _shared_1.Logger.warn('Service Gateway Inited');
            this.buildSchemas(metadata.schemas);
            this.buildQuery();
            this.buildMutation();
        }
        if (type === _shared_1.GatewayTypes.REST) {
            this.setControllers(metadata.controllers);
        }
    }
    static create(type, metadata) {
        return new GatewayBuilder(type, metadata);
    }
    setControllers(controllers) {
        this.controllers = controllers;
    }
    getControllers() {
        return this.controllers;
    }
    getResolvers() {
        return {
            Query: this.Query,
            Mutation: this.Mutation,
        };
    }
    getSchema() {
        return this.schema;
    }
    buildGraphQL() {
        return {
            resolvers: this.getResolvers(),
            schema: this.getSchema(),
        };
    }
    buildSchemas(schemas) {
        schemas.forEach((schema) => this.schema += schema);
    }
    buildQuery() {
        this.services_query.forEach((data) => {
            const _func = (Object.entries(data))[0];
            this.Query[_func[0]] = (_, obj) => _func[1]({
                metadata: _,
                params: obj,
            });
        });
    }
    buildMutation() {
        this.services_mutation.forEach((data) => {
            const _func = (Object.entries(data))[0];
            this.Mutation[_func[0]] = (_, obj) => _func[1]({
                metadata: _,
                params: obj,
            });
        });
    }
}
exports.GatewayBuilder = GatewayBuilder;
//# sourceMappingURL=gateway.builder.js.map