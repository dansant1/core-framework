import {
    Platforms,
} from '../platforms';
import {
    Protocols,
    GatewayTypes,
} from '../@shared';
import {
    ConfigGraphQL,
} from '../builders';

export class ServerBuilder {
    
    port: number;
    prefix?: string;
    serverType: Platforms;
    protocolType: Protocols;
    gatewayType: GatewayTypes;
    config?: Record<string, string|number|boolean>;
    entryType: ConfigGraphQL;

    public setPort(port: number): ServerBuilder {
        this.port = port;
        return this;
    }

    public setPrefix(prefix: string): ServerBuilder {
        this.prefix = prefix;
        return this;
    }

    public setEntryType(type: ConfigGraphQL): ServerBuilder {
        this.entryType = type;
        return this;
    }

    public setServerType(type: Platforms): ServerBuilder {
        this.serverType = type;
        return this;
    }

    public setProtolType(type: Protocols): ServerBuilder {
        this.protocolType = type;
        return this;
    }

    public setGatewayType(type: GatewayTypes): ServerBuilder {
        this.gatewayType = type;
        return this;
    }

    public setConfig(config: Record<string, string|number|boolean>): ServerBuilder {
        this.config = config;
        return this;
    }

}