interface IResolvers {
    Query: Record<string, unknown>;
    Mutation: Record<string, unknown>;
}
export interface ConfigGraphQL {
    schema: string;
    resolvers: IResolvers;
}
export declare class GraphQLBuilder {
    schema: string;
    resolvers: IResolvers;
    constructor();
    static create(): GraphQLBuilder;
    getInstance(): {
        schema: string;
        resolvers: IResolvers;
    };
    setSchema(schema: string): GraphQLBuilder;
    setResolvers(resolvers: IResolvers): GraphQLBuilder;
}
export {};
//# sourceMappingURL=graphql.builder.d.ts.map