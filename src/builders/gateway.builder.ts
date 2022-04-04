import {
    Logger,
    GatewayTypes,
} from '../@shared';

import {
    IRest,
} from '../contracts';

export class GatewayBuilder {
    public readonly gatewayTtype: GatewayTypes;
    public readonly Query: Record<string, unknown> = {};
    public readonly Mutation: Record<string, unknown> = {};
    public readonly services_query: Record<string, any>[] = [];
    public readonly services_mutation: Record<string, any>[] = [];
    public controllers: IRest[] = [];
    public schema: string = '';

    constructor(
        type: GatewayTypes,
        metadata: {
            services_query?: Record<string, any>[], 
            services_mutation?: Record<string, any>[], 
            schemas?: string[],
            controllers?: IRest[],
        }
    ) {
        if (type === GatewayTypes.GraphQL ) {
            this.services_query = metadata.services_query;
            this.services_mutation = metadata.services_mutation;
            Logger.warn('Service Gateway Inited');
            this.buildSchemas(metadata.schemas);
            this.buildQuery();
            this.buildMutation();
        }

        if (type === GatewayTypes.REST) {
            this.setControllers(metadata.controllers);
        }
        
    }

    static create(
        type: GatewayTypes, 
        metadata: {
            services_query?: Record<string, any>[], 
            services_mutation?: Record<string, any>[], 
            schemas?: string[],
            controllers?: IRest[],
        }
       
    ): GatewayBuilder {
        return new GatewayBuilder(type, metadata);
    }

    public setControllers(controllers: IRest[],) {
        this.controllers = controllers;
    }

    public getControllers() {
        return this.controllers;
    }

    public getResolvers() {
        return {
            Query: this.Query,
            Mutation: this.Mutation,
        }
    }

    public getSchema() {
        return this.schema;
    }

    public buildGraphQL(){
        return {
            resolvers: this.getResolvers(),
            schema: this.getSchema(),
        }
    }

    buildSchemas(schemas: string[]) {
        schemas.forEach((schema) => this.schema += schema);
    }

    buildQuery() {
        this.services_query.forEach(
            (data: { key: string, handler: any }) => {
                const _func = (Object.entries(data))[0] as any;
                this.Query[_func[0]] = (
                    _: Record<string, unknown>, 
                    obj: Record<string, unknown>
                )  => 
                _func[1]({
                    metadata: _, 
                    params: obj,
                });
            }
        );
    }

    buildMutation() {
        this.services_mutation.forEach(
            (data: { key: string, handler: any }) => {
                const _func = (Object.entries(data))[0] as any;
                this.Mutation[_func[0]] = (
                    _: Record<string, unknown>, 
                    obj: Record<string, unknown>
                ) => 
                _func[1]({
                    metadata: _, 
                    params: obj,
                });
            }
        );
    }
}