import { Destination } from "./phoneserve.classes.destination";
export interface IVoiceappDialOptions {
    optionsSoundfile: string;
    0?: Destination;
    1?: Destination;
    2?: Destination;
    3?: Destination;
    4?: Destination;
    5?: Destination;
    6?: Destination;
    7?: Destination;
    8?: Destination;
    9?: Destination;
}
export interface IVoiceappOptions {
    name: string;
    introductionSoundfile: string;
    dialOptions: IVoiceappDialOptions;
    phonenumber: number;
}
export declare class Voiceapp extends Destination {
    introductionSoundFile: string;
    dialOptions: IVoiceappDialOptions;
    phonenumber: number;
    constructor(optionsArg: IVoiceappOptions);
}
