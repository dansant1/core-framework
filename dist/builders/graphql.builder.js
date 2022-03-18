"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLBuilder = void 0;
class GraphQLBuilder {
    constructor() { }
    static create() {
        return new GraphQLBuilder();
    }
    getInstance() {
        const schema = this.schema;
        const resolvers = this.resolvers;
        return {
            schema,
            resolvers,
        };
    }
    setSchema(schema) {
        this.schema = schema;
        return this;
    }
    setResolvers(resolvers) {
        this.resolvers = resolvers;
        return this;
    }
}
exports.GraphQLBuilder = GraphQLBuilder;
//# sourceMappingURL=graphql.builder.js.map