import { GatewayTypes, Dependency } from '../@shared';
import { HttpMethods } from '../contracts';
export declare class TransporterFactory {
    gatewayType: GatewayTypes;
    dependency: Dependency;
    constructor(gatewayType: GatewayTypes, dependency: Dependency);
    static create(data: {
        gatewayType: GatewayTypes;
        dependency: Dependency;
    }): TransporterFactory;
    emit(event: string, method?: HttpMethods, metadata?: Record<string, unknown>): Promise<Record<string, unknown>>;
}
//# sourceMappingURL=transporter.factory.d.ts.map