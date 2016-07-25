import { Provider } from "./phoneserve.classes.provider";
export interface IInstanceOptions {
    provider: Provider;
    name: string;
    phonenumbers: number[];
}
export declare class Instance {
    provider: Provider;
    name: string;
    phonenumbers: number[];
    constructor(optionsArg: IInstanceOptions);
}
