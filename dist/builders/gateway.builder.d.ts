import { GatewayTypes } from '../@shared';
import { IRest } from '../contracts';
export declare class GatewayBuilder {
    readonly gatewayTtype: GatewayTypes;
    readonly Query: Record<string, unknown>;
    readonly Mutation: Record<string, unknown>;
    readonly services_query: Record<string, any>[];
    readonly services_mutation: Record<string, any>[];
    controllers: IRest[];
    schema: string;
    constructor(type: GatewayTypes, metadata: {
        services_query?: Record<string, any>[];
        services_mutation?: Record<string, any>[];
        schemas?: string[];
        controllers?: IRest[];
    });
    static create(type: GatewayTypes, metadata: {
        services_query?: Record<string, any>[];
        services_mutation?: Record<string, any>[];
        schemas?: string[];
        controllers?: IRest[];
    }): GatewayBuilder;
    setControllers(controllers: IRest[]): void;
    getControllers(): IRest[];
    getResolvers(): {
        Query: Record<string, unknown>;
        Mutation: Record<string, unknown>;
    };
    getSchema(): string;
    buildGraphQL(): {
        resolvers: {
            Query: Record<string, unknown>;
            Mutation: Record<string, unknown>;
        };
        schema: string;
    };
    buildSchemas(schemas: string[]): void;
    buildQuery(): void;
    buildMutation(): void;
}
//# sourceMappingURL=gateway.builder.d.ts.map