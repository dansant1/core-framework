export declare enum ConfigType {
    ENV = "env",
    SECRET_MANAGER = "secret_manager"
}
interface ICreateEnvConfig {
    configType: ConfigType;
    metatada?: Record<string, unknown>;
}
export declare class EnvConfigFactory {
    configType: ConfigType;
    metadata: Record<string, unknown>;
    constructor(data: ICreateEnvConfig);
    static create(data: ICreateEnvConfig): EnvConfigFactory;
    get(key: string): string;
}
export {};
//# sourceMappingURL=envConfig.d.ts.map