export enum ConfigType {
    ENV             = 'env',
    SECRET_MANAGER  = 'secret_manager',
}

export interface ICreateEnvConfig {
    configType: ConfigType,
    metatada?: Record<string, unknown>,
}

