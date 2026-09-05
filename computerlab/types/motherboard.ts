export interface MOTHERBOARD {
    name:string;
    socket:"AMD"|"INTEL";
    chipset:string;
    formFactor:"ATX"|"Micro-ATX"|"Mini=ITX";
    memoryType:"DDR4"|"DDR5";
    memorySpeed:number; //em MHz
    memorySlots:number;
    maximumMemory:number; //em GB
    storageSlots:number;
    //assumi i/o completo e rede e conectividade completa
}