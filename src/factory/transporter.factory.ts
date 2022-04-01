import axios from 'axios';

import {
    GatewayTypes,
    Dependency,
} from '../@shared';

import {
    HttpMethods,
} from '../contracts';

export class TransporterFactory {

    public gatewayType: GatewayTypes;
    public dependency: Dependency;

    constructor(
        gatewayType: GatewayTypes, 
        dependency: Dependency,
    ) {
        this.gatewayType = gatewayType;
        this.dependency = dependency;
    }

    static create(
        data: {
            gatewayType: GatewayTypes, 
            dependency: Dependency,
        },
    ): TransporterFactory {
        return new TransporterFactory(
            data.gatewayType,
            data.dependency,
        );
    }

    public async emit(
        event: string,
        method?: HttpMethods,
        metadata?: Record<string, unknown>,
    ): Promise<Record<string, unknown>> {
        if (
            this.dependency === Dependency.AXIOS &&
            this.gatewayType === GatewayTypes.REST
        ) {
            return axios[method](event, metadata || {});
        } else {
            return {};
        }
    }
}