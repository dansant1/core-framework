import {
    Logger,
    GatewayTypes,
    Protocols,
} from './@shared';
import { 
    IApp,
    IRest,
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
    readonly #prefix: string;
    readonly #PORT: number;
    readonly #gatewayType: GatewayTypes;
    readonly #protocolType: Protocols;
    readonly #entryType: ConfigGraphQL|IRest[];

    constructor(appInit: ServerBuilder) {
        this.#serverType     = appInit.serverType;
        this.#gatewayType    = appInit.gatewayType;
        this.#protocolType   = appInit.protocolType;
        this.#entryType      = appInit.entryType;
        this.#prefix         = appInit.prefix;

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

    public async listen(address?: string,): Promise<void> {
        if (
            this.#serverType === Platforms.FASTIFY
        ) {
            if (
                this.#protocolType === Protocols.HTTP && 
                this.#gatewayType === GatewayTypes.GraphQL
            ) {
                const prefix = `${this.#prefix}/graphql`;
                console.log('PREFIX=', prefix);
                //@ts-ignore
                this.#app.register(mercurius, {
                    //@ts-ignore
                    schema: this.#entryType.schema,
                    //@ts-ignore
                    resolvers: this.#entryType.resolvers,
                    graphiql: false,
                    routes: true,
                    path: prefix,
                });
                //@ts-ignore
                this.#app.get('/healthcheck', (request: any, reply: any) => {
                    return {
                        message: 'is alive graphql',
                    }
                });
            }

            if (
                this.#protocolType === Protocols.HTTP && 
                this.#gatewayType === GatewayTypes.REST
            ) {
                //@ts-ignore
                this.#entryType.forEach( (obj: IRest) => {
                    //@ts-ignore
                    this.#app[obj.method](
                        obj.url, 
                        async (request: any, reply: any) => {
                            //@ts-ignore
                            return obj.handler({
                                metadata: {
                                    request,
                                    reply,
                                },
                                params: {},
                            });
                        }
                    );
                });
            }

            try {
                await this.#app.listen(this.#PORT, address || undefined);
                Logger.warn(`Service ${this.#prefix} running at PORT=${this.#PORT}`);
            } catch(error) {
                Logger.error(`Error=${error.message}`);
                this.#app.log.error(error);
                process.exit(1);
            }
        }
    }
}
