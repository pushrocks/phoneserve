import * as plugins from "./phoneserve.plugins";
import {Voiceapp} from "./phoneserve.classes.voiceapp";

export interface IDestinationOptions {
    name:string;
}

export class Destination {
    name:string;
    constructor(optionsArg:IDestinationOptions){
        this.name = optionsArg.name;
    };
}