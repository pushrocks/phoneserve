import { Provider } from "./phoneserve.classes.provider";
import { Destination } from "./phoneserve.classes.destination";
export interface IInstanceOptions {
    provider: Provider;
    name: string;
    destinations: Destination[];
}
export declare class Instance {
    provider: Provider;
    name: string;
    constructor(optionsArg: IInstanceOptions);
}
