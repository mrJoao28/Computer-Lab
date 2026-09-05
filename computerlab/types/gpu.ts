export interface GPU {
    name:string;
    vram: number;
    cores:number; // nucleos de proccessamento
    clock:number; // em MHz
    interface: number; // em bits
    bandwidth:number; //em GB/s
    tdp:number; // consumo de energia em Watts (W)
}