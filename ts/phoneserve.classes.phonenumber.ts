import * as plugins from "./phoneserve.plugins";
import {Destination} from "./phoneserve.classes.destination";

export interface IPhonenumber {
    dialnumber:number;
    destination:Destination;
}

export class Phonenumber {
    dialnumber:number;
    destination:Destination;

    constructor(optionsArg:IPhonenumber){
        this.dialnumber = optionsArg.dialnumber;
        this.destination = optionsArg.destination;
    }
}