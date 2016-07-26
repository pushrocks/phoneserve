import * as plugins from "./phoneserve.plugins";
import { Destination } from "./phoneserve.classes.destination";

export interface IGroupOptions {
    name: string;
}

export class Group extends Destination {
    constructor(optionsArg: IGroupOptions) {
        super({
            name: optionsArg.name
        });
    }
}