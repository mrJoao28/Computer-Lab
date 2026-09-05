import { CPU } from "./cpu";
import { GPU } from "./gpu";
import { MOTHERBOARD } from "./motherboard";
import { PSU } from "./psu";
import { RAM } from "./ram";
import { STORAGE } from "./storage";

export interface COMPUTER {
    name:string;
    cpu:CPU;
    gpu:GPU;
    ram:RAM[];
    storage:STORAGE[];
    motherboard:MOTHERBOARD;
    psu:PSU;
}