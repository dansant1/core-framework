import {
    Logger,
    GatewayTypes,
    Protocols,
} from './@shared';
import { 
    IApp,
} from './contracts';
import {
    Platforms,
} from './platforms';
import {
    ServerBuilder,
    ConfigGraphQL,
} from './builders';

import fastify from 'fastify';
import mercurius from 'mercurius';

export class AppFactory implements IApp {
    readonly #app;
    readonly #serverType: string;
    readonly #PORT: number;
    readonly #gatewayType: GatewayTypes;
    readonly #protocolType: Protocols;
    readonly #entryType: ConfigGraphQL;

    constructor(appInit: ServerBuilder) {
        this.#serverType     = appInit.serverType;
        this.#gatewayType    = appInit.gatewayType;
        this.#protocolType   = appInit.protocolType;
        this.#entryType      = appInit.entryType;

        if (appInit.serverType === Platforms.FASTIFY) {
            this.#app = fastify(appInit.config);           
        }
        this.#PORT = appInit.port;
    }

    static create(
        appInit: ServerBuilder
    ): AppFactory {
        return new AppFactory(appInit);
    }

    public async listen(): Promise<void> {
        if (
            this.#serverType === Platforms.FASTIFY
        ) {
            if (
                this.#protocolType === Protocols.HTTP && 
                this.#gatewayType === GatewayTypes.GraphQL
            ) {
                //@ts-ignore
                this.#app.register(mercurius, {
                    path: '/graphql',
                    schema: this.#entryType.schema,
                    resolvers: this.#entryType.resolvers,
                    graphiql: 'playground',
                });
            }
            try {
                await this.#app.listen(this.#PORT);
                Logger.warn(`Server running at port=${this.#PORT}`);
            } catch(error) {
                this.#app.log.error(error);
                process.exit(1);
            }
        }
    }
}
