import * as plugins from "./phoneserve.plugins";
import {Destination} from "./phoneserve.classes.destination";

interface IRuleOptions {
    name:string
}

export class Rule extends Destination {
    constructor(optionsArg:IRuleOptions){
        super({
            name: optionsArg.name
        });
    };
}