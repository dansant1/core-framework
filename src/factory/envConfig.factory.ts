import * as dotenv from 'dotenv';
dotenv.config({ path: `${process.cwd()}/src/.env` });

import {
    ICreateEnvConfig,
    ConfigType,
} from '../platforms';
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