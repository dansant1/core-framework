import { Platforms } from '../platforms';
import { Protocols, GatewayTypes } from '../@shared';
import { ConfigGraphQL } from '../builders';
import { IRest } from '../contracts';
export declare class ServerBuilder {
    port: number;
    prefix?: string;
    serverType: Platforms;
    protocolType: Protocols;
    gatewayType: GatewayTypes;
    config?: Record<string, string | number | boolean>;
    entryType: ConfigGraphQL | IRest[];
    setPort(port: number): ServerBuilder;
    setPrefix(prefix: string): ServerBuilder;
    setEntryType(type: ConfigGraphQL): ServerBuilder;
    setServerType(type: Platforms): ServerBuilder;
    setProtolType(type: Protocols): ServerBuilder;
    setGatewayType(type: GatewayTypes): ServerBuilder;
    setConfig(config: Record<string, string | number | boolean>): ServerBuilder;
}
//# sourceMappingURL=server.builder.d.ts.map