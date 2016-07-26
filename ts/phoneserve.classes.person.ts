import * as plugins from "./phoneserve.plugins";
import {Destination} from "./Destination";

export interface IPersonOptions {
    name:string;
}

export class Person extends Destination {
    constructor(optionsArg:IPersonOptions){
        super(optionsArg.name);
    }
}