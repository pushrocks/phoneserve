import * as plugins from "./phoneserve.plugins";
import {Provider} from "./phoneserve.classes.provider";

export interface IInstanceOptions {
    provider:Provider,
    name:string,
    phonenumbers:number[]
}

export class Instance {
    provider:Provider;
    name:string;
    phonenumbers:number[];
    constructor(optionsArg:IInstanceOptions){
        this.provider = optionsArg.provider;
        this.name = optionsArg.name;
        this.phonenumbers = optionsArg.phonenumbers;
    };
}