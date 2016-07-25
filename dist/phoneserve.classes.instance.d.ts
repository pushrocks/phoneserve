import * as PhoneserveProviders from "./phoneserve.providers";
export interface IInstanceOptions {
    provider: PhoneserveProviders.EProviderOptions;
    providerOptions: any;
    name: string;
    phonenumbers: number[];
}
export declare class Instance {
    constructor(optionsArg: IInstanceOptions);
}
