interface IResolvers {
    Query: Record<string, unknown>;
    Mutation: Record<string, unknown>;
}

export interface ConfigGraphQL {
    schema: string;
    resolvers: IResolvers;
}

export class GraphQLBuilder {
    public schema: string;
    public resolvers: IResolvers;

    constructor() {}

    static create() {
        return new GraphQLBuilder()
    }

    public getInstance() {
        const schema = this.schema;
        const resolvers = this.resolvers;
        return {
            schema,
            resolvers,
        }
    }

    public setSchema(schema: string): GraphQLBuilder {
        this.schema = schema;
        return this;
    }

    public setResolvers(resolvers: IResolvers): GraphQLBuilder {
        this.resolvers = resolvers;
        return this;
    }
    
}