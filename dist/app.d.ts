import { IApp } from './contracts';
import { ServerBuilder } from './builders';
export declare class AppFactory implements IApp {
    #private;
    constructor(appInit: ServerBuilder);
    static create(appInit: ServerBuilder): AppFactory;
    listen(address?: string): Promise<void>;
}
//# sourceMappingURL=app.d.ts.map