import * as plugins from "./phoneserve.plugins";
import * as PhoneserveProviders from "./phoneserve.providers";

export interface IInstanceOptions {
    provider:PhoneserveProviders.EProviderOptions,
    providerOptions:any,
    name:string,
    phonenumbers:number[]
}

export class Instance {
    constructor(optionsArg:IInstanceOptions){
        
    };
}