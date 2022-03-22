import { ICreateEnvConfig, ConfigType } from '../platforms';
export declare class EnvConfigFactory {
    configType: ConfigType;
    metadata: Record<string, unknown>;
    constructor(data: ICreateEnvConfig);
    static create(data: ICreateEnvConfig): EnvConfigFactory;
    get(key: string): string;
}
//# sourceMappingURL=envConfig.factory.d.ts.map