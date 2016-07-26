import * as plugins from "./phoneserve.plugins";
import { Destination } from "./phoneserve.classes.destination";

export interface IPersonOptions {
    name: string;
}

export class Person extends Destination {
    constructor(optionsArg: IPersonOptions) {
        super({
            name: optionsArg.name
        });
    }
}