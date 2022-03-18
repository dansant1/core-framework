export enum ConfigType {
    ENV             = 'env',
    SECRET_MANAGER  = 'secret_manager',
}

interface ICreateEnvConfig {
    configType: ConfigType,
    metatada?: Record<string, unknown>,
}

export class EnvConfigFactory {
    public configType: ConfigType;
    public metadata: Record<string, unknown>;

    constructor(data: ICreateEnvConfig) {
        this.configType = data.configType;
        this.metadata   = data.metatada;
    }

    static create(data: ICreateEnvConfig) {
        return new EnvConfigFactory(data);
    }

    public get(key: string) {
        if (this.configType === ConfigType.ENV) {
            return process.env?.[key];
        }

        if (this.configType === ConfigType.SECRET_MANAGER) {
            // TO DO add logic here
            return key;
        }
    }
}