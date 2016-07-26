import * as plugins from "./phoneserve.plugins";
import {Provider} from "./phoneserve.classes.provider";
import {Destination} from "./phoneserve.classes.destination";
export interface IInstanceOptions {
    provider:Provider;
    name:string;
    destinations:Destination[];
}

export class Instance {
    provider:Provider;
    name:string;
    constructor(optionsArg:IInstanceOptions){
        this.provider = optionsArg.provider;
        this.name = optionsArg.name;
    };
}