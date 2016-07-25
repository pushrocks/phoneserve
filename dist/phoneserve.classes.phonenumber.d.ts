import { Destination } from "./phoneserve.classes.destination";
export interface IPhonenumber {
    dialnumber: number;
    destination: Destination;
}
export declare class Phonenumber {
    dialnumber: number;
    destination: Destination;
    constructor(optionsArg: IPhonenumber);
}
