export interface RAM {
    name:string;
    capacity: number; // in GB
    memoryType: "DDR4" | "DDR5";
    speed: number; // em MHz
    cl:number; //latencia
    formFactor: "DIMM" | "SO-DIMM";
}